/* Official libraries */
const router = require('express').Router()
const async      = require('async');
const braintree = require('braintree');

/* Local libraries/modules */
const checkJWT = require('../middlewares/check-jwt');
const User       = require('../models/user');
const Course = require('../models/course');

const gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: 'thn3nwt332tsvjqn',
  publicKey: 'k6k2qgm9gzrwz42t',
  privateKey: '7717476b1a8a826cb1baf58d440fb69c'
});

/* GET ALL COURSES */
router.get('/courses', (req, res, next) => {
  Course.find({}, (err, courses) => {
    if (err) return next(err);
    res.json(courses);
  });
});

/* GET A SINGLE COURSE */
router.get('/courses/:id', (req, res, next) => {
  Course.findOne({ _id: req.params.id }, (err, course) => {
    if (err) return next(err);
    res.json(course);
  });
});

/* Payment API */
router.post('/payment', checkJWT, (req, res, next) => {
  async.parallel([
    function(callback) {
      gateway.transaction.sale({
        amount: req.body.amount,
        paymentMethodNonce: req.body.nonce,
        options: {
          submitForSettlement: true
        }
      }, function (err, result) {
        if (err) {
          res.json(err)
        }
        if (result.success) {
          callback(err);
        } else {
          console.error(result.message);
        }
      });
    },
    function() {
      User.update(
        {
          _id: req.user._id,
          'courses.course': { $ne: req.query.courseID }
        },
        {
          $push: { courses: { course: req.query.courseID } },
        }, function(err, count) {
          if (err) return next(err);
          callback(err);
        });
      }
    ], function(err, results) {
      res.json({ message: "Successfully enrolled!"})
    })
});

/* TEST A COURSE */
router.post('/test-course', (req, res, next) => {
  let course = new Course();
  course.title = req.body.title;
  course.description = req.body.description;
  course.image = req.body.image;
  course.price = req.body.price;
  course.save();
  res.json({ message: 'Successfully added a new course' });
});


module.exports = router;
