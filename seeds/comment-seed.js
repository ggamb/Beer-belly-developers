const sequelize = require("../config/connection");

const {Comment} = require("../models");

const commentInfo = [
  {
    comment_text: "Spam",
    user_id: 1,
    bar_id: "text",
  },
  {
    comment_text: "Testo",
    user_id: 2,
    bar_id: "frito",
  },
  {
    comment_text: "Hello Worlds",
    user_id: 3,
    bar_id: "cheeto",
  },
  {
    comment_text: "Good Bye",
    user_id: 4,
    bar_id: "vodka",
  },
];

const seedComments = () => Comment.bulkCreate(commentInfo);

module.exports = seedComments;
