'use strict';
const { 
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Post,{
        foreignKey:'userId',
      })
      User.hasMany(models.Comment,{
        foreignKey:'userId',
        as: 'owner'
      })
    }
  }
  User.init({
    username: {
      allowNull:false,
      type:DataTypes.STRING
    },
    fullName: {
      allowNull:false,
      type:DataTypes.STRING
    },
    email: {
      allowNull:false,
      type:DataTypes.STRING
    },
    passwordDigest: {
      allowNull:false,
      type:DataTypes.STRING
    },
    age: {
      allowNull:false,
      type:DataTypes.INTEGER
    },
    DOB: {
      allowNull:false,
      type:DataTypes.DATE
    },
    profilePic:{
      type:DataTypes.STRING,
      allowNull: true
    },
    city: {
      allowNull: true,
      type:DataTypes.STRING
    },
    state: {
      allowNull: true,
      type:DataTypes.STRING
    },
    country: {
      allowNull: true,
      type:DataTypes.STRING
    },
    bio: {
      allowNull: true,
      type:DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};