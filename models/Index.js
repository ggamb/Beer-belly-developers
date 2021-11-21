const User = require("./User");
const Comment = require("./Comment");
const BarList = require("./BarList");
// association / joins

User.hasMany(Comment, {
  foreignKey: "user_id",
  // onDelete: 'SET CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

//BarList.hasMany(Comment, {
//  through: User,
//  foreignKey: "bar_id",
//});

//
module.exports = { User, Comment, BarList };
