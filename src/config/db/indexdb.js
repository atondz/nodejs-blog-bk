const mongoose = require('mongoose');

async function connect(){
   try {
    await mongoose.connect('mongodb://localhost:27017/users', {
      useNewUrlParser: true,
      useUnifiedTopology: true
      });
      
      console.log('Connected to Mongo');
   } catch (error) {
    console.log('Connect failure: ' + error);
   }
}
module.exports = {connect};

