const express = require('express');
const app = express();
const PORT = process.env.port || 3000;

// Console.log that server is up and running
app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });

// Creating a simple get route
app.get('/express_backend', (req, res) => {
    res.send(({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'}));
});