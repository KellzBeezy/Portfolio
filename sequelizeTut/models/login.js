"use strict";
const { Model } = require("sequelize");
const Client = require("./clients");

module.exports = (sequelize, DataTypes) => {
  class Login extends Model {
    /**
     * ?Helper method for defining associations.
     * ?This method is not a part of Sequelize lifecycle.
     * ?The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Login.belongsTo(models.User, {
        foreignKey: "email",
        targetKey: "email",
      });
    }
    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  Login.init(
    //attributes
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      //options

      sequelize,
      tableName: "login",
      modelName: "Login",
    }
  );
  return Login;
};
