const router = require('express').Router();

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
  const data = {
    breweries: barNames
  }

  res.render('index', data);
});

module.exports = router;