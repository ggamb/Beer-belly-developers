const router = require("express").Router();
const homeRoutes = require("./HomePage-routes");
const apiRoutes = require("./api");

//For landing page and routes, login, logout
router.use("/", homeRoutes);

//For bars, cities, zips, and users
router.use("/api", apiRoutes);

module.exports = router;
