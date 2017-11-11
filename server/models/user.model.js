// grab the things we need
var mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: { type:String, required:true},
  email: { type:String, required:true },
  password: { type: String, required: true },


  created_at: Date,
  updated_at: Date
});


userSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.updated_at = currentDate;
  if (!this.created_at)
    this.created_at = currentDate;
  next();
});

userSchema.pre('save', function(next){
  bcrypt.hash('myPassword', 10, function(err, hash) {
    this.password = hash;
  });
});


var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;