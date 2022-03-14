const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
      username: {
        type: String,
        required: [true, "Enter Valid Username is required"],
        unique: [true, "Please Try Again Another Username !"],
        trim: true,
        lowercase: true,
        minLength: 4
      },
      firstname: {
        type: String,
        required: [true, 'Enter a First Name required'],
        trim: true,
        lowercase: true
      },
      lastname: {
        type: String,
        alias: 'surname',
        required: [true, 'Enter a Last Name required'],
        trim: true,
        lowercase: true
      },
      password: {
        type: String,
        required: true,
        trim: true,
        minLength: 6,
        validate: function(value) {
            var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
            return passwordRegex.test(value);
          }
      },
      email: {
        type: String,
        required: true,
        unique: [true, "Duplicate Email Not allowed"],
        trim: true,
        uppercase: true,
        validate: function(value) {
          var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
          return emailRegex.test(value);
        }
      },
      type: {
        type: String,
        required: true,
        enum: ['admin', 'customer'],
        trim: true,
        lowercase: true
      },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;