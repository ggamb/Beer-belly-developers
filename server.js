const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);


// creates cookies for user
const sess = {
  secret: 'Secret ',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));