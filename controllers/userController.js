const db = require('../models');

// Defining methods for the usersController
module.exports = {
    //Returns all user records available
    findAll: function(req, res) {
      db.User
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    //Returns user with the given id
    findById: function(req, res) {
      db.User
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    //Creates a new user in the db
    create: function(req, res) {
      db.User
        .create(req.body)
        .then(res.redirect(307, "/"))
        .catch(err => res.status(422).json(err));
    },
    //Adds a new hike to the user's passport array
    update: function(req, res) {

      let new_Hike = {
        //whatever the data fields I need to add

      }

      db.User
        .findOneAndUpdate({ _id: req.params.id }, {"$addToSet" : { "userPassport" : new_Hike} }) //be sure to update the req.body to the new obj -> new_Hike
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    //Delets a hike from the user's passport array
    remove: function(req, res) { //remove hike, be sure to update this to handle that query
      db.User
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
  };