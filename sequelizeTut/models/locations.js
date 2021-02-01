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
      Location.hasOne(models.Company, { foreignKey: "location_id" });
      Location.hasOne(models.Driver, { foreignKey: "location_id" });
      Location.hasOne(models.Client, { foreignKey: "location_id" });
      Location.hasOne(models.Machine, { foreignKey: "location_id" });
      Location.hasOne(models.OnlineStatus, { foreignKey: "location_id" });
      Location.hasOne(models.Route, { foreignKey: "from_location_id" });
      Location.hasOne(models.Route, { foreignKey: "to_location" });
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
        type: DataTypes.DECIMAL,
        allowNull: true,
        defaultValue: null,
        validate: { min: -90, max: 90 },
      },
      longitude: {
        type: DataTypes.DECIMAL,
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
