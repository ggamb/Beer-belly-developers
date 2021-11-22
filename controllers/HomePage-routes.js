const router = require("express").Router();
//const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
const { BarList, Comment, User } = require('../models/');

// Redirects user to homepage after login
router.get("/login", (req, res) => {
  console.log('**enter login redirect')
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

//
router.get("/", (req, res) => {
  res.render("index", {
    loggedIn: req.session.loggedIn
  });
});

router.get("/bar/:id", (req, res) => {

  let barID = req.params.id;

  BarList.findOne({
    where: {
      id: barID
    },
    attributes: [
      'id', 'name', 'brewery_type', 'street', 'phone', 'website_url'
    ],
    include: [
      {
        model: Comment,
        attributes: ['comment_text', 'user_id'],
        include: {
          model: User,
          attributes: ['username']
        }
      }
    ]
  }).then(barWithComments => {
      console.log("barWithComments", barWithComments);
     
      const bar = {
        id: barWithComments.dataValues.id,
        name: barWithComments.dataValues.name,
        brewery_type: barWithComments.dataValues.brewery_type,
        street: barWithComments.dataValues.street,
        phone: barWithComments.dataValues.phone,
        website_url: barWithComments.dataValues.website_url,
        comments: barWithComments.dataValues.comments
      }

      console.log(bar.comments);

     let barResult = {
        bar,
        loggedIn: req.session.loggedIn
      };

      res.render('single-post', barResult)
    })
    .catch(err => {
      console.log(err)
    })



})

module.exports = router;
