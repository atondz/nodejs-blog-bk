const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Class = new Schema({
  name: { type: String, required: true },        
  image: { type: String, required: true },       
  email: { type: String, required: true },       
  phone: { type: String, required: true },       
  address: { type: String },                     
  role: { type: String, enum: ['Admin', 'User', 'Moderator'], default: 'User' }, 
  dateOfBirth: { type: Date },                  
  createdAt: { type: Date, default: Date.now }, 
  updatedAt: { type: Date, default: Date.now }   
});

// Tự động cập nhật trường `updatedAt` mỗi khi có cập nhật
Class.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Class', Class, 'class');
