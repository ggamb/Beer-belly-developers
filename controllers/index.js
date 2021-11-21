const router = require("express").Router();
const homeRoutes = require("./HomePage-routes");

const apiRoutes = require("./api");

router.use("/", homeRoutes);
//router.use("/login", userRoutes);
//router.use("/logout", userRoutes);

//router.use("/id", userRoutes);


router.use("/api", apiRoutes);

// router.use((req, res) => {
//   res.status(404).end();
// });

module.exports = router;
