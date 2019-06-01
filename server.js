require("dotenv").config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const app = express();
const PORT = process.env.PORT || 3001;
const uristring = process.env.MONGODB_URI ||"mongodb://localhost/trails";
let apiKey = process.env.IP_STACK_KEY; //declared but not used

// Bodyparser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Define middleware here
app.use(express.urlencoded({ extended: true, useCreateIndex: true }));
app.use(express.json());

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

//This block checks to see where the app is bing deployed _
//either production mode || local instance
if(process.env.NODE_ENV === 'production') {

    app.use(express.static(path.join(__dirname, 'trails/build')));

    app.use("/api/users", users);

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "./trails/build/index.html"));
    });

} else {

    app.use(express.static(path.join(__dirname, 'trails/build')));

    app.use("/api/users", users);

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "./trails/build/index.html"));
    });
}

// Connect to MongoDB
mongoose.connect(uristring, { useNewUrlParser: true })
.then(() => {
    console.log("🗄 ==> Successfully connected to mongoDB.");
})
.catch((err) => {
    console.log(`Error connecting to mongoDB: ${err}`);
});

// Console.log that server is up and running
app.listen(PORT, function() {
  console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});