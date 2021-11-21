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

BarList.hasMany(Comment, {
  foreignKey: "BarList_id",
});

Comment.belongsTo(BarList,{
  through: User,
  foreignKey: "BarList_id",
});

/*User.belongsToMany(BarList, {
  through: Comment,
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});*/

module.exports = { User, Comment, BarList };
