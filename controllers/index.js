/*Placeholder for server.js*/
const router = require('express').Router();
const homeRoutes = require('./HomePage-routes');

router.use('/', homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;