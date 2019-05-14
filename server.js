require("dotenv").config();
const express = require('express');
const path = require('path');
const routes = require ('./routes');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3001;
const mongoURL = process.env.PROD_MONGODB || "mongodb://localhost:27017/trails";


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//This block checks to see where the app is bing deployed _
//either production mode || local instance
//TODO: Replace app.get with app.use(routes) -> need to add logic to api-routes
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

  mongoose.connect(mongoURL, {useNewUrlParser: true})
  .then(() => {
    console.log("🗄 ==> Successfully connected to mongoDB.");
  })
  .catch((err) => {
    console.log(`Error connecting to mongoDB: ${err}`);
  });



// Console.log that server is up and running
app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });