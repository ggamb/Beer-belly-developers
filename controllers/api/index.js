const router = require('express').Router();

const zipRoutes = require('./zip-routes');
const cityRoutes = require('./city-routes');
const barRoutes = require('./bar-routes');
const commentRoutes = require('./comment-routes');
const userRoutes = require('./User-routes')

router.use('/city', cityRoutes);
router.use('/zip', zipRoutes);
router.use('/bar', barRoutes);
router.use('/comment', commentRoutes);
router.use('/user', userRoutes);


module.exports = router;