"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * ?Helper method for defining associations.
     * ?This method is not a part of Sequelize lifecycle.
     * ?The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  Client.init(
    //attributes
    {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING(6),
        allowNull: false,
      },
      payment_type: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      payment_account: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isCreditCard: true,
        },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      birth_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
    },
    //options
    {
      sequelize,
      tableName: "clients",
      modelName: "Client",
    }
  );
  return Client;
};
