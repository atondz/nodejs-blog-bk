const mongoose = require('mongoose');

//định nghĩa schema
const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gpa: Number,
  fullTime: Boolean,
  registerDate: Date,
  graduation: Date,
  course: [String],
  address: {
    street: String,
    city: String,
    zip: String
  }
});

// Tạo model từ schema
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
