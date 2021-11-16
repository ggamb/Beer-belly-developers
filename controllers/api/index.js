const router = require('express').Router();

const zipRoutes = require('./zip-routes');
const cityRoutes = require('./city-routes');
const barRoutes = require('./bar-routes');

router.use('/city', cityRoutes);
router.use('/zip', zipRoutes);
router.use('/bar', barRoutes);

module.exports = router;