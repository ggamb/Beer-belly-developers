const router = require('express').Router();

const zipRoutes = require('./zip-routes');
const cityRoutes = require('./city-routes');

router.use('/city', cityRoutes);
router.use('/zip', zipRoutes);

module.exports = router;