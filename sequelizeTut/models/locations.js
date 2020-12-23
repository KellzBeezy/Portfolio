"use strict";
const { Model, BelongsTo } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
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
  Location.init(
    //attributes
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      latitude: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
        validate: { min: -90, max: 90 },
      },
      longitude: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
        validate: { min: -180, max: 180 },
      },
    },
    {
      validate: {
        bothCoordsOrNone() {
          if ((this.latitude === null) !== (this.longitude === null)) {
            throw new Error(
              "Require either both latitude and longitude or neither"
            );
          }
        },
      },

      //options

      sequelize,
      tableName: "locations",
      modelName: "Location",
    }
  );
  return Location;
};
