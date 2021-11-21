const router = require("express").Router();
const { BarList, Comment, User } = require('../../models');

router.get('/', (req, res) => {
  console.log('** Enter get all users');
  BarList.findAll()
    .then(dbBarData => res.json(dbBarData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})

router.get("/:bar", (req, res) => {
  BarList.findOne({
    where: {id: req.params.bar},
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
  })
  .then(barPostData => {
    if (!barPostData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }
    res.json(barPostData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

});

router.post("/:bar", (req, res) => {
  //If bar is a new bar to the database
  //Searches by entered zip code
  let barID = req.params.bar;
  //If unique, creates new BarList instance using API return
  BarList.findOrCreate({
    where: { id: barID },
    include: [
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
      id: req.body.id,
      name: req.body.name,
      brewery_type: req.body.brewery_type,
      street: req.body.street,
      phone: req.body.phone,
      website_url: req.body.website_url
    }
  })
    .then(barPostData => {
      if (!barPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(barPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})

module.exports = router;
