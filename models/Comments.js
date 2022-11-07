const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Comments extends Model {

}

Comments.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment_post: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        posts_id: {
            references: {
                model: 'posts',
                key: 'id',
            },
        },
        user_id: {
            references:  {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        // hooks:

        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'comments',
    }
);

module.exports = Comments;