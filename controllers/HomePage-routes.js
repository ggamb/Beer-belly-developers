const router = require("express").Router();
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
const { BarList, Comment, User } = require('../models');

// if needed
// redirects user to homepage after login
router.get("/login", (req, res) => {
  console.log('**enter login redirect')
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/", (req, res) => {
  res.render("index", {
    loggedIn: req.session.loggedIn
  });
});

router.get("/bar/:id", (req, res) => {

  let barID = req.params.id;

  /*const apiKey = "https://api.openbrewerydb.org/breweries/" + barID;
  fetch(apiKey)
    .then((response) => {
      return response.json();
    })
    .then(bar => {
      let barResult = {
        bar,
        loggedIn: req.session.loggedIn,
        comments: null
      };
  
      res.render("single-post", barResult);
    })*/

  Comment.findAll({
    where: {
      BarList_id: barID
    },
    attributes: [
      'comment_text',
      'user_id',
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      },
      {
        model: BarList,
        attributes: ['id', 'name', 'brewery_type', 'street', 'phone', 'website_url']
      }
    ]
  })
    .then(barWithComments => {
      console.log("bawWithComments", barWithComments);
      //res.json(barWithComments);
       /*const bar = {
        id: barWithComments.BarList.id,
        name: barWithComments.BarList.name,
        brewery_type: barWithComments.BarList.brewery_type,
        street: barWithComments.BarList.street,
        phone: barWithComments.BarList.phone,
        website_url: barWithComments.BarList.website_url,
      }
    

     let barResult = {
        bar,
        loggedIn: req.session.loggedIn,
        comments
      };*/

      //res.render('single-post', barResult)
    })
    .catch(err => {
      console.log(err)
    })



})

module.exports = router;
