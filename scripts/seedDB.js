const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/trails"
);

const userSeed = [
  {
    username: "Mario",
    password: "teamCompass",
    email: "mario@email.com",
    userPassport: [
      {
        type: String,
        unique: true,
      }
    ],
    date: new Date(Date.now())
  },
  {
    username: "Josh",
    password: "teamCompass",
    email: "josh@email.com",
    userPassport: [
      {
        type: String,
        unique: true,
      }
    ],
    date: new Date(Date.now())
  },
  {
    username: "Joonwoo",
    password: "teamCompass",
    email: "joonwoo@email.com",
    userPassport: [
      {
        type: String,
        unique: true,
      }
    ],
    date: new Date(Date.now())
  },
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });