const router = require('express').Router();
const homeRoutes = require('./HomePage-routes');
const userRoutes = require('./User-routes.js');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/login', userRoutes);
router.use('/logout', userRoutes);
router.use('/Users', userRoutes);
router.use('/id', userRoutes);
router.use('/api', apiRoutes);

// router.use((req, res) => {
//   res.status(404).end();
// });

module.exports = router;