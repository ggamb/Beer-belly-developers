/*Placeholder for server.js*/
const router = require('express').Router();
const homeRoutes = require('./HomePage-routes');
const userRoutes = require ("./User-routes");

router.use('/', homeRoutes);
router.use('/user', userRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;