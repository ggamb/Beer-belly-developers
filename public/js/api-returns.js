//City name entered by user passed to function
async function getBreweriesByCity (event) {
    //Searches by entered city name
    event.preventDefault();

    let cityName = document.querySelector("#text-city").value.trim();

    if(cityName == null) {
        return;
    }

    document.location.replace('/api/city/' + cityName);


}

//Zip code entered by user passed to function
async function getBreweriesByZip(event) {
    event.preventDefault();

    let zipCode = document.querySelector("#text-zip").value.trim();

    if(zipCode == null) {
        return;
    }

    document.location.replace('/api/zip/' + zipCode);


}

document.getElementById('submit-city').addEventListener('click', getBreweriesByCity);
document.getElementById('submit-zip').addEventListener('click', getBreweriesByZip);