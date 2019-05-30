require("dotenv").config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const routes = require ('./routes');
const app = express();
const PORT = process.env.PORT || 3001;
const uristring = process.env.MONGODB_URI ||"mongodb://localhost/trails";

let apiKey = process.env.IP_STACK_KEY; //declared but not used

// Define middleware here
app.use(express.urlencoded({ extended: true, useCreateIndex: true }));
app.use(express.json());

//This block checks to see where the app is bing deployed _
//either production mode || local instance
if(process.env.NODE_ENV === 'production') {

    app.use(express.static(path.join(__dirname, 'trails/build')));

    app.use(routes);

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "./trails/build/index.html"));
    });

} else {

    app.use(express.static(path.join(__dirname, 'trails/build')));

    app.use(routes);

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "./trails/build/index.html"));
    });
}

mongoose.connect(uristring, {useNewUrlParser: true, useCreateIndex: true} )
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