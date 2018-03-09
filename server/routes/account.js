const jwt        = require('jsonwebtoken');
const async      = require('async');
const config     = require('../config/secret');
const checkJWT = require('../middlewares/check-jwt');
/* MODELS */
const User       = require('../models/user');
const superSecret = config.secret;
const router = require('express').Router()


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

        user.save()
        var token = jwt.sign({
          user: user
        }, superSecret, {
          expiresIn: '7d' // expires in 24 hours
        });

        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }
    });
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

    Order
    .find({ owner: req.decoded.user._id })
    .populate('products.product')
    .populate('owner')
    .exec((err, orders) => {
      if (err) {
        res.json({
          success: false,
          message: 'Couldn\'t find your order'
        });
      } else {
        res.json({
          success: true,
          message: "Found your order",
          orders: orders
        });
      }
    });
  });

  /* GET - My-courses , single course */
  router.get('/my-courses/:id', checkJWT, (req, res, next) => {

    Order
    .findOne({ _id: req.params.id })
    .deepPopulate('products.product.owner')
    .populate('owner')
    .exec((err, order) => {
      if (err) {
        res.json({
          success: false,
          message: 'Couldn\'t find your orders'
        });
      } else {
        res.json({
          success: true,
          message: "Found your orders",
          order: order
        });
      }

    });
  });

module.exports = router;
