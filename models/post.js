'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class post extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	post.init(
		{
			userId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				onDelete: 'CASCADE',
				references: {
					model: 'users',
					key: 'id',
				},
			},
			caption: {
				allowNull: false,
				type: DataTypes.TEXT,
			},
			likeCount: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			image: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			userName: {
				allowNull: false,
				type: DataTypes.STRING,
			},
		},
		{
			sequelize,
			modelName: 'Post',
      tableName: 'posts'
		}
	)
	return post
}
