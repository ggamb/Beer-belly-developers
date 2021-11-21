const router = require("express").Router();
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
<<<<<<< HEAD
const { BarList } = require('../../models');
const isUnique = require('../../utils/controllerHelper');
=======
const { BarList, Comment, User } = require('../../models');

router.get('/', (req,res) => {
  console.log('** Enter get all users');
  BarList.findAll()
    .then(dbBarData => res.json(dbBarData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})
>>>>>>> baed0d2654b45deeb8e86b51fe1bb3a9b5c24855

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
<<<<<<< HEAD

      if (isUnique(bar)) {
        console.log("unique bar");
        //If unique, creates new BarList instance using API return
        BarList.create({
          id: bar.id,
          name: bar.name,
          brewery_type: bar.brewery_type,
          street: bar.street,
          phone: bar.phone,
          website_url: bar.website_url
        })

        //Loads single-post page with no comments since it is a new post
        let barResult = {
          bar,
          loggedIn: req.session.loggedIn,
          comments: null
        };

        res.render("single-post", barResult);

      } else {
        console.log("not unique");
        //Not unique bar
        //Finds the existing BarList post and loads single page with comments associated to single-post
        BarList.findOne({
          where: {
            id : bar.id
          }
        })
        .then(barListData => {
            console.log(barListData);
        })
      }
    })
    .catch((err) => {
      console.log(err);
    });

  /*fetch(apiKey)
    .then((response) => {
      return response.json();
    })
    .then((bar) => {
      let barResult = {
        bar,
        loggedIn: req.session.loggedIn,
      };
      console.log(barResult);
      res.render("single-post", barResult);
=======
      console.log(bar.id);

        //If unique, creates new BarList instance using API return
        BarList.findOrCreate({
          where: {id: "cheeto"},
          include:[
            {
              model: Comment,
              attributes: ['id', 'comment_text', 'user_id', 'BarList_id'],
              include: {
                model: User,
                attributes: ['username']
              }
            }
          ],
          defaults: {
            id: bar.id,
            name: bar.name,
            brewery_type: bar.brewery_type,
            street: bar.street,
            phone: bar.phone,
            website_url: bar.website_url
          }
        })
        .then(barPostData => {
          console.log("barPostData", barPostData);
         // console.log("array of comments?", barPostData.BarList.dataValues.comments)
          if (!barPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
          }
          //res.json(barPostData)
          let barResult = {
            bar,
            loggedIn: req.session.loggedIn,
            comments: null
          };

          console.log(barResult)
  
          res.render("single-post", barResult);

        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });;

        /*BarList.findOne({
          where: {id: bar.id},
          attributes: [
            'id'
          ],
          include:[
            {
              model: Comment,
              attributes: ['id', 'comment_text', 'user_id', 'BarList_id'],
              include: {
                model: User,
                attributes: ['username']
              }
            }
          ]
        })*/

        //console.log("barList", barList);
        
        //console.log("created", created);

        //If bar is a new bar to the database,
        //Then loads single-post page with no comments since it is a new post
        
>>>>>>> baed0d2654b45deeb8e86b51fe1bb3a9b5c24855
    })
    .catch((err) => {
      console.log(err);
    });*/
});

module.exports = router;
