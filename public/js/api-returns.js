//const fetch = require('node-fetch');

//Zip code entered by user passed to function
async function getBreweriesByZip(event) {
    event.preventDefault();
    //Searches by entered zip code
    let zipCode = document.querySelector("#text-zip").value.trim();
    console.log(zipCode);
    const apiKey = "https://api.openbrewerydb.org/breweries?by_postal=" + zipCode;

    fetch(apiKey)
    .then(response => {return response.json()})
    .then(apiResponse => {
        console.log(apiResponse);
        return apiResponse;
    })
    .catch(err => {console.log(err)})
}

//City name entered by user passed to function
async function getBreweriesByCity (event) {
    //Searches by entered city name
    event.preventDefault();
    let cityName = document.querySelector("#text-city").value.trim();
    const apiKey = "https://api.openbrewerydb.org/breweries?by_city=" + cityName;

    fetch(apiKey)
    .then(response => {return response.json()})
    .then(apiResponse => {
        console.log(apiResponse);
        return apiResponse;
    })
    .catch(err => {console.log(err)})
}

document.getElementById('submit-city').addEventListener('click', getBreweriesByCity);
document.getElementById('submit-zip').addEventListener('click', getBreweriesByZip);