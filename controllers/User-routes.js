const router = require('express').Router();
const sequelize = require('../connection');

// post new User route
router.post('/', (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password
  })
    .then(dbUser => {
      req.session.save(() => {
        // gives server access to user name and id
        req.session.user_id = dbUser.id;
        req.session.username = dbUser.username;
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

// login route
router.post('/login', (req, res) => {
  
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbUser => {
    if (!dbUser) {
      // invalied request
      res.status(400).json({ message: 'No user with that email , invalid request' });
      return;
    }

    const evaluatePassword = dbUser.checkPassword(req.body.password);

    if (!evaluatePassword) {
      res.status(400).json({ message: 'Incorrect password, invalid request' });
      return;
    }
    
    req.session.save(() => {
      req.session.user_id = dbUser.id;
      req.session.username = dbUser.username;
      req.session.loggedIn = true;
  
      res.json({ user: dbUser, message: 'You are  logged in' });
    });
  });
});

// logout route
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


// update user password
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