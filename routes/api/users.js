const router = require('express').Router();
const userController = require('../../controllers/userController');

// Matches with "/api/users"
router.route("/")
    .get(userController.findAll)
    .post(userController.create); //TODO: Update to reflect actual route


// Matches with "/api/users/:id"
//TODO: Update to reflect actual routes
// router
//     .route("/:id")
//     .get(userController.findByID)
//     .put(userController.update)
//     .delete(userController.remove);

module.exports = router;