let mongoose = require("mongoose");

// Save a reference to the Schema constructor
let Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
let PassportSchema = new Schema({
    
});

let Passport = mongoose.model("Passport", PassportSchema);

module.exports = Passport;