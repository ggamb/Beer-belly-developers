//City name entered by user passed to function
async function getBreweriesByCity (event) {
    //Searches by entered city name
    event.preventDefault();

    let cityName = document.querySelector("#text-city").value.trim();

    let currentURL = window.location.href.split('/');

    let newURL = currentURL[0]  + "api/city/" + cityName;

    window.location.href = newURL;


}

//Zip code entered by user passed to function
async function getBreweriesByZip(event) {
    event.preventDefault();

    let zipCode = document.querySelector("#text-zip").value.trim();

    let currentURL = window.location.href.split('/');

    let newURL = currentURL[0] + "api/zip/" + zipCode;

    window.location.href = newURL;

}

document.getElementById('submit-city').addEventListener('click', getBreweriesByCity);
document.getElementById('submit-zip').addEventListener('click', getBreweriesByZip);