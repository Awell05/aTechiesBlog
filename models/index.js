const User = require('./User');
const Posts = require('./Posts');
const Comments = require('./Comments');

User.hasMany(Posts, {
    foreignKey: 'user_id',
});

User.hasMany(Comments, {
    foreignKey: 'user_id',
});

Posts.belongsTo(User, {
    foreignKey: 'user_id',
});

Posts.hasMany(Comments, {
    foreignKey: 'posts_id', 
});

Comments.belongsTo(Posts, {
    foreignKey: 'posts_id',
});




module.exports = { User, Posts, Comments };
