//const fetch = require('node-fetch');

//Zip code entered by user passed to function
const getBreweriesByZip = (zipCode) => {
    //Searches by entered zip code
    const apiKey = "https://api.openbrewerydb.org/breweries?by_postal=" + zipCode;

    fetch(apiKey)
    .then(response => {return response.json()})
    .then(apiResponse => {
        return apiResponse;
    })
    .catch(err => {console.log(err)})
}

//City name entered by user passed to function
const getBreweriesByCity = (cityName) => {
    //Searches by entered city name
    const apiKey = "https://api.openbrewerydb.org/breweries?by_city=" + cityName;

    fetch(apiKey)
    .then(response => {return response.json()})
    .then(apiResponse => {
        console.log(apiResponse);
        return apiResponse;
    })
    .catch(err => {console.log(err)})
}

document.querySelector('#text-city').addEventListener('submit', getBreweriesByCity);
document.querySelector('#text-zip').addEventListener('submit', getBreweriesByZip);