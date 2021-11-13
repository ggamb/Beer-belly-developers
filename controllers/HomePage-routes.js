const router = require('express').Router();
const {getBreweriesByZip, getBreweriesByCity} = require('../public/js/api-returns');
const citySearchValue = $('#text-city').val();

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
  const barNames =  getBreweriesByCity(citySearchValue);

  const data = {
    breweries: barNames
  }

  res.render('index', data);
});


module.exports = router;