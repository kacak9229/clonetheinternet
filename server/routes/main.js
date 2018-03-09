/* Official libraries */
const router = require('express').Router()
const async      = require('async');

/* Local libraries/modules */
const checkJWT = require('../middlewares/check-jwt');
const User       = require('../models/user');
const Course = require('../models/course');
/* GET ALL COURSES */

router.get('/courses', (req, res, next) => {
  Course.find({}, (err, courses) => {
    if (err) return next(err);
    res.json(courses);
  });
});


/* GET A SINGLE COURSE */
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
