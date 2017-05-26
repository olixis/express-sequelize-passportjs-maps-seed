'use strict';
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6, 10],
        notEmpty: true,
      },
    },
    createdAt: {
      type: DataTypes.TIME,
      allowNull: true,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.TIME,
      allowNull: true,
      field: 'updated_at'
    }
  }, {
      classMethods: {
        associate: function (models) {
          // associations can be defined here
        }
      }
    }, {
    timestamps: false
  });
  return User;
};