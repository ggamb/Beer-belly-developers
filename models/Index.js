const User = require('./User');
const Comment = require('./Comment');

// association / joins

User.hasMany(Comment, {
  foreignKey: 'user_id',
  // onDelete: 'SET CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

// Bar.belogsTo(User,
//   though)
module.exports = { User, Comment };