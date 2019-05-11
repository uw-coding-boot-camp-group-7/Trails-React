const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.port || 3001;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//production mode
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'trails/build')));

    app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./trails/build/index.html"));
    });
} else {
    app.use(express.static(path.join(__dirname, 'trails/build')));

    app.get('/express_backend', (req, res) => {
        res.send(({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'}));
    });
  }



// Console.log that server is up and running
app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });