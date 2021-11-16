const router = require('express').Router();
// const sequelize = require('../connection');
const { User} = require('../models');

// get all users 

router.get('/', (req, res) => {
  console.log('** Enter get all users');
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// post - Crerate new User route
router.post('/', (req, res) => {
 console.log('** enter POST users');
  User.create({
    username: req.body.username,
    password: req.body.password
  })
    .then(dbUserData => {
      req.session.save(() => {
        // gives server access to user name and id
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
  
        res.json(dbUserData);
      });
    })
    .catch(err => {
      console.log(err);
      // server issue
      res.status(500).json(err);
    });
});

// post- login route
router.post('/login', (req, res) => {
  console.log('**Enter login');
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(dbUserData => {
    const evaluatePassword = dbUserData.checkPassword(req.body.password);

    if (!evaluatePassword) {
      res.status(400).json({ message: 'Incorrect password' });
      return;
    }
    
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUser.username;
      req.session.loggedIn = true;
  
      res.json({ user: dbUserData, message: 'You are  logged in' });
    });
  });
});

// post- logout route
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
    //  204 "no content"
      res.status(204).end();
    });
  }
  else {
    //  404 website not found
    res.status(404).end();
  }
});


// put -update user password
router.put('/:id', (req, res) => {
 
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbUser => {
      if (!dbUser) {
        // invalied request
        res.status(400).json({ message: 'Invalid id, no user found' });
        return;
      }
      res.json(dbUser);
    })
    .catch(err => {
      console.log(err);
      // 500 server problem
      res.status(500).json(err);
    });
});

module.exports = router;