const router = require("express").Router();
const appRoutes = require("./app_routes");

// Book routes
router.use("/", appRoutes);

module.exports = router;