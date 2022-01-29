const Sequelize = require('sequelize');

require('dotenv').config();

// the application is executed on Heroku ... use the clearDB database
/*const sequelize = new Sequelize(process.env.DATABASE_URL, {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
})*/

// create connection to our db
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;