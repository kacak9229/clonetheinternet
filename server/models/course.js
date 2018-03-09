const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  title: { type: String },
  description: String,
  price: Number,
  image: String
});

// var CourseSchema = new Schema({
//   title: { type: String, index: true, trim: true },
//   promocode: String,
//   imagePath: String,
//   imageDesc: String,
//   desc: String,
//   price: Number,
//   body: String,
//   contents: [{ type: Schema.Types.ObjectId, ref: 'Video'}],
//   ownByTeacher: { type: Schema.Types.ObjectId, ref: 'User'},
//   ownByStudent: [{
//     user: { type: Schema.Types.ObjectId, ref: 'User'},
//   }],
//   totalStudents: Number,
//   reviews: [{
//     review: { type: Schema.Types.ObjectId, ref: 'Review'}
//   }],
//   totalReviews: Number,
//   color: String,
//   comingSoon: { type: Boolean, default: true }
// });

module.exports = mongoose.model('Course', CourseSchema);
