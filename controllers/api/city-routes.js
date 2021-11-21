const router = require('express').Router();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

router.get('/:city', (req, res) => {
  
    //Searches by entered zip code
    let cityName = req.params.city;
    const apiKey = "https://api.openbrewerydb.org/breweries?by_city=" + cityName;
  
  
    fetch(apiKey)
    .then(response => {return response.json()})
    .then(apiResponse => {
      let barNames = {
        breweries: apiResponse,
        loggedIn : req.session.loggedIn
      };
      res.render('index', barNames);
    })
    .catch(err => {console.log(err)});

});

module.exports = router;