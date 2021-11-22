const router = require('express').Router();
const User  = require('../../models/User');

//Get all users 
router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      res.status(500).json(err);
    });
});

//Create new User route
router.post('/', (req, res) => {
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
      // server issue
      res.status(500).json(err);
    });
});

//Login route
router.post('/login', (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(dbUserData => {

    if (!dbUserData) {
      res.status(400).json({ message: 'No user with that username!' });
      return;
    }
    const evaluatePassword = dbUserData.checkPassword(req.body.password);

    if (!evaluatePassword) {
      res.status(400).json({ message: 'Incorrect password' });
      return;
    }
    
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
  
      res.json({ user: dbUserData, message: 'You are logged in' });
    });
  });
});

// Logout route
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
     });
  }
  else {
    //  404 website not found
    res.status(404).end();
  }
});

// Update user password
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
      // 500 server problem
      res.status(500).json(err);
    });
});

module.exports = router;