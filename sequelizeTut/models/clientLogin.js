"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ClientLogin extends Model {
    /**
     * ?Helper method for defining associations.
     * ?This method is not a part of Sequelize lifecycle.
     * ?The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //Location.BelongsTo(company);
    }
    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  ClientLogin.init(
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
      tableName: "client_login",
      modelName: "ClientLogin",
    }
  );
  return ClientLogin;
};
