const sequelize = require("../config/connection");

const {BarList} = require("../models");

const barListInfo = [
  {
    id: "text",
    name: "apple",
    brewery_type: "micro",
    street: "whatever",
    phone: "whome",
    website_url: "google.com",
  },
  {
    id: "frito",
    name: "orange",
    brewery_type: "nane",
    street: "paradise",
    phone: "donthave",
    website_url: "blackjack.com",
  },
  {
    id: "cheeto",
    name: "pear",
    brewery_type: "oven",
    street: "nowhere",
    phone: "orange",
    website_url: "snacks.com",
  },
  {
    id: "vodka",
    name: "walmart",
    brewery_type: "openpizza",
    street: "yesterday",
    phone: "random",
    website_url: "askjeeves.com",
  },
];

const seedBarList = () => BarList.bulkCreate(barListInfo);

module.exports = seedBarList;
