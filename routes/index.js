const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const appRoutes = require("./app");

// API Routes
router.use("/api", apiRoutes);
router.use("/", appRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../trails/build/index.html"));
});

module.exports = router;