const User = require('./User');
const Bpost = require('./BlogPost');
const Comment = require('./Comments');

User.hasMany(Bpost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Bpost.belongsTo(User, {
  foreignKey: 'user_id'
});

Bpost.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Bpost, {
  foreignKey: 'user_id'
});


module.exports = { User, Bpost };
