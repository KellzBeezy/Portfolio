"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Route extends Model {
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
  Route.init(
    //attributes
    {
      from_location_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      to_location: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      driver_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      client_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(13.2),
        allowNull: false,
      },
      trip_status_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      //options

      sequelize,
      tableName: "routes",
      modelName: "Route",
    }
  );
  return Route;
};
