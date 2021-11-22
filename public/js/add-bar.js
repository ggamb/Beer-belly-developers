//Adds a bar to database if new
//Sends user to single-post bar page with comments
async function addBar(event) {
    event.preventDefault();
    const barID = event.target.getAttribute('id');
    const apiKey = "https://api.openbrewerydb.org/breweries/" + barID;

    fetch(apiKey)
        .then((response) => {
            return response.json();
        })
        .then(barReturn => {
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
            return document.location.replace('/bar/' + barID);
        })
        .catch( err => {
            console.log(err)
        })
}

document.querySelectorAll(".bar-link").forEach(bar => {
    bar.addEventListener('click', addBar);
})