const router = require('express').Router();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

router.get('/:bar', (req, res) => {
  
    //Searches by entered zip code
    let barName = req.params.bar;
    const apiKey = "https://api.openbrewerydb.org/breweries/" + barName;
  
    fetch(apiKey)
    .then(response => {return response.json()})
    .then(bar => {
      let barResult = {
        bar,
        loggedIn : req.session.loggedIn
      };
      console.log(barResult);
      res.render('single-post', barResult);
    })
    .catch(err => {console.log(err)});

});

module.exports = router;