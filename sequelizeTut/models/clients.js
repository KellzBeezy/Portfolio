"use strict";
const { Model } = require("sequelize");
const clientLogin = require("./login");
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * ?Helper method for defining associations.
     * ?This method is not a part of Sequelize lifecycle.
     * ?The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Client.hasOne(models.Route, { foreignKey: "client_id" });
      Client.belongsTo(models.User, { foreignKey: "user_id" });
      Client.belongsTo(models.Payment, { foreignKey: "payment_type" });
      Client.belongsTo(models.Location, { foreignKey: "location_id" });
    }
    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  Client.init(
    //attributes
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      location_id: {
        type: DataTypes.INTEGER,
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
