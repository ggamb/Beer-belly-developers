const router = require('express').Router();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// if needed 
// redirects user to homepage after login
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


router.get('/', (req, res) => {
    res.render('index');
});




module.exports = router;