const sequelize = require("../config/connection");

const User = require("../models");

const userInfo = [
  {
    username: "Spam",
    password: "password",
  },
  {
    username: "Test",
    password: "password",
  },
  {
    username: "Egg",
    password: "password",
  },
  {
    username: "Cheeto",
    password: "password",
  },
];

const seedUser = () => User.bulkCreate(userInfo, { individualHooks: true });

module.exports = seedUser;
