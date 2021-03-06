//const { json } = require("sequelize/types");

//const { response } = require("express");

function addBar(event) {
    event.preventDefault();
    const barID = event.target.getAttribute('id');
    const apiKey = "https://api.openbrewerydb.org/breweries/" + barID;

    //const barData = await findBar(barID);
    fetch(apiKey)
        .then((response) => {
            return response.json();
        })
        .then(barReturn => {
            console.log(barReturn);
            console.log(barReturn.name);
            return fetch('/api/bar/' + barReturn.id, {
                method: 'POST',
                body: JSON.stringify({
                    id: barReturn.id,
                    name: barReturn.name,
                    brewery_type: barReturn.brewery_type,
                    street: barReturn.street,
                    phone: barReturn.phone,
                    website_url: barReturn.website_url
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        })
        .then(response => {
            console.log(response);
            return document.location.replace('/bar/' + barID);
        })
        .catch( err => {
            console.log(err)
        })
    
}


document.querySelectorAll(".bar-link").forEach(bar => {
    bar.addEventListener('click', addBar);
})