const User = require("./User");
const Comment = require("./Comment");
const BarList = require("./BarList");

// association / joins
User.hasMany(Comment, {
  foreignKey: "user_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

BarList.hasMany(Comment, {
  foreignKey: "BarList_id",
});

Comment.belongsTo(BarList, {
  through: User,
  foreignKey: "BarList_id",
});

module.exports = { User, Comment, BarList };
