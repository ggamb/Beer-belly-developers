//City name entered by user passed to function
async function getBreweriesByCity (event) {
    //Searches by entered city name
    event.preventDefault();

    let cityName = document.querySelector("#text-city").value.trim();

    let hostName = window.location.hostname;
    
    console.log(hostName);

    if(hostName == 'localhost') {
        hostName += ':3001/';
    } 

    console.log(hostName);

    let newURL = 'http://' + hostName  + "api/city/" + cityName;

    window.location.href = newURL;

}

//Zip code entered by user passed to function
async function getBreweriesByZip(event) {
    event.preventDefault();

    let zipCode = document.querySelector("#text-zip").value.trim();

    let hostName = window.location.hostname;

    if(hostName == 'localhost') {
        hostName += ':3001/';
    } 

    console.log(hostName);

    let newURL = 'http://' + hostName  + "api/zip/" + zipCode;

    window.location.href = newURL;

}

document.getElementById('submit-city').addEventListener('click', getBreweriesByCity);
document.getElementById('submit-zip').addEventListener('click', getBreweriesByZip);