const zipOrCity = (event) => {
    event.preventDefault();
    console.log('we are here');
    let userSearch = document.querySelector("#text-submit").value.trim();

    if(isNaN(userSearch)) {
        getBreweriesByCity();
    } else {
        getBreweriesByZip();
    }
}

//City name entered by user passed to function
const getBreweriesByCity = () => {
    //Searches by entered city name
    let cityName = document.querySelector("#text-submit").value.trim();

    if(cityName == null) {
        return;
    }

    document.location.replace('/api/city/' + cityName);
}

//Zip code entered by user passed to function
const getBreweriesByZip = () => {
    let zipCode = document.querySelector("#text-submit").value.trim();

    if(zipCode == null) {
        return;
    }

    document.location.replace('/api/zip/' + zipCode);
}

document.getElementById('submit-search').addEventListener('click', zipOrCity);