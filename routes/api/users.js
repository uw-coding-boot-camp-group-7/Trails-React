const router = require('express').Router();
const userController = require('../../controllers/userController');

// Matches with "/api/users" to add user or return all users
router.route("/")
    .get(userController.findAll)
    .post(userController.create);

// Matches with "/api/users/:id" to return specific user
router
  .route("/:id")
  .get(userController.findById)
  .delete(userController.remove);;

// Matches with "/api/users/:id/:hike_id" to add or delete hike
// router
//   .route("/:id/:hike_id")
//   .put(userController.update)
//   .delete(userController.remove);

module.exports = router;