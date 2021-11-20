const router = require("express").Router();
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
const { BarList } = require('../../models');
//const isUnique = require('../../utils/controllerHelper');

router.get("/:bar", (req, res) => {
  //Searches by entered zip code
  let barName = req.params.bar;

  const apiKey = "https://api.openbrewerydb.org/breweries/" + barName;
  fetch(apiKey)
    .then((response) => {
      return response.json();
    })
    .then(bar => {
      console.log("bar data", bar);

        //If unique, creates new BarList instance using API return
        const [newBar, created] = BarList.findOrCreate({
          where: {id: bar.id},
          defaults: {
            id: bar.id,
            name: bar.name,
            brewery_type: bar.brewery_type,
            street: bar.street,
            phone: bar.phone,
            website_url: bar.website_url
          }
        });

        console.log("created", created);
        //If bar is a new bar to the database,
        //Then loads single-post page with no comments since it is a new post
        let barResult = {
          bar,
          loggedIn: req.session.loggedIn,
          comments: null
        };

        res.render("single-post", barResult);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
