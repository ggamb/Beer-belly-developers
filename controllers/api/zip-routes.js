const router = require('express').Router();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

router.get('/:zip', (req, res) => {
    //Searches by entered zip code
    let zipCode = req.params.zip;
    const apiKey = "https://api.openbrewerydb.org/breweries?by_postal=" + zipCode;
  

    fetch(apiKey)
    .then(response => {return response.json()})
    .then(apiResponse => {
      let barNames = {
        breweries: apiResponse
      };
      res.render('index', barNames);
    })
    .catch(err => {console.log(err)});


});

module.exports = router;