const jwt        = require('jsonwebtoken');
const async      = require('async');
const config     = require('../config/secret');
const checkJWT = require('../middlewares/check-jwt');
/* MODELS */
const User       = require('../models/user');
const superSecret = config.secret;
const router = require('express').Router();
const request = require('request');

/* LOGIN ROUTE */
router.post('/login', (req, res, next) => {
	  // find the user

    User.findOne({ email: req.body.email }, (err, user) => {

	    if (err) throw err;

	    // no user with that username was found
	    if (!user) {
	      res.json({
	      	success: false,
	      	message: 'Authentication failed. User not found.'
	    	});
	    } else if (user) {

	      // check if password matches
	      var validPassword = user.comparePassword(req.body.password);
	      if (!validPassword) {
	        res.json({
	        	success: false,
	        	message: 'Authentication failed. Wrong password.'
	      	});
	      } else {

	        // if user is found and password is right
	        // create a token
	        var token = jwt.sign({
	        	user: user
	        }, superSecret, {
	          expiresIn: '24h' // expires in 24 hours
	        });

	        // return the information including token as JSON
	        res.json({
	          success: true,
	          message: 'Enjoy your token!',
	          token: token
	        });
	      }
	    }
	  });
	});


/* SIGNUP ROUTE */
router.post('/signup', (req, res, next) => {
  async.waterfall([
    function(callback) {
      var user = new User();
      user.name = req.body.name;
      user.email = req.body.email;
      user.password = req.body.password;
      user.picture = user.gravatar();

      User.findOne({ email: req.body.email }, (err, existingUser) => {

        if (existingUser) {

          res.json({
            success: false,
            message: 'Account with that email is already exist',
          });

        } else {
          callback(err, user);
        }
      });
    },

    function(user) {
      request({
        url: 'https://us12.api.mailchimp.com/3.0/lists/4a14db449e/members',
        method: 'POST',
        headers: {
          'Authorization': 'randomUser c6705b6f72d959f135bba7a66f13c3bd-us12',
          'Content-Type': 'application/json'
        },
        json: {
          'email_address': user.email,
          'status': 'subscribed'
        }
      }, function(err, response, body) {
        if (err) {
          return next(err);
        } else {
          user.save()
          var token = jwt.sign({
            user: user
          }, superSecret, {
            expiresIn: '7d' // expires in 7 days
          });
          // return the information including token as JSON
          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token
          });
        }
      });
    }
  ]);
});

/* PROFILE ROUTE */
router.route('/profile')
  /* GET - EDIT PROFILE */
  .get(checkJWT, (req, res, next) => {
    User.findOne({ _id: req.decoded.user._id }, (err, user) => {
      res.json({
        success: true,
        user: user,
        message: "Successful"
      });
    })
  })
  /* POST - EDIT PROFILE */
  .post(checkJWT, (req, res, next) => {
    User.findOne({ _id: req.decoded.user._id }, function(err, user) {

      if (err) return next(err);

      if (req.body.name) user.name = req.body.name;
      if (req.body.email) user.email = req.body.email;
      if (req.body.password) user.password = req.body.password;

      user.save()
      res.json({
        success: true,
        message: "Successfully edited your profile"
      });
    });
  });

  /* GET - My-courses */
  router.get('/my-courses', checkJWT, (req, res, next) => {
    User
    .find({ owner: req.decoded.user._id })
    .populate('courses.course')
    .exec((err, courses) => {
      if (courses) {
        res.json({
          success: true,
          courses: courses
        });
      } else {
        res.json({
          success: false,
          message: 'You havent enrolled in any of the courses'
        });
      }
    });
  });

module.exports = router;
