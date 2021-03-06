let mongoose = require("mongoose");
let Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
let userSchema = new Schema({
  // `username` must be of type String
  // `username` will trim leading and trailing whitespace before it's saved
  // `username` is a required field and throws a custom error message if not supplied
  username: {
    type: String,
    trim: true,
    required: true
  },
  // `password` must be of type String
  // `password` will trim leading and trailing whitespace before it's saved
  // `password` is a required field and throws a custom error message if not supplied
  // `password` uses a custom validation function to only accept values 6 characters or more
  password: {
    type: String,
    trim: true,
    required: true
  },
  // `email` must be of type String
  // `email` must be unique
  // `email` must match the regex pattern below and throws a custom error message if it does not
  // You can read more about RegEx Patterns here https://www.regexbuddy.com/regex.html
  email: {
    type: String,
    trim: true,
    required: true
  },
  // `date` must be of type Date. The default value is the current date
  userCreated: {
    type: Date,
    default: Date.now
  },
  userPassport: [
    {
      type: String,
    }
  ]
});

// This creates our model from the above schema, using mongoose's model method
let User = mongoose.model("User", userSchema);

// Export the User model
module.exports = User;