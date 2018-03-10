const Course = require('../models/course');

module.export = (req, res, next) => {
  Course.findOne({ _id: req.params.id , 'ownByStudent.user': req.decoded.user._id }, (err, foundStudent) => {
    if (foundStudent) {
      req.foundStudent = true;
      next();
    } else {
      req.foundStudent = false;
      next();
    }
  });
}
