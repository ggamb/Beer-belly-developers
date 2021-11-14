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
  
  /*const data = {
    breweries: barNames
  }*/
  

  res.render('index');
});

router.get('/:zip', (req, res) => {
  
  //Searches by entered zip code
  let zipCode = req.params.zip;
  const apiKey = "https://api.openbrewerydb.org/breweries?by_postal=" + zipCode;


  fetch(apiKey)
  .then(response => {return response.json()})
  .then(apiResponse => {
    //console.log("response", apiResponse);
    let barNames = {
      breweries: apiResponse
    };
    console.log("bar names inside", barNames)
    res.render('index', barNames);
  })
  .catch(err => {console.log(err)});

  /*console.log("bar names ourside", barNames)
  const data = {
    barNames
  }
  
  console.log("data to render", barNames)*/

  
});

module.exports = router;