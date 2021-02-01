"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Driver extends Model {
    /**
     * ?Helper method for defining associations.
     * ?This method is not a part of Sequelize lifecycle.
     * ?The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Driver.hasOne(models.OnlineStatus, {
        foreignKey: "driver_id",
      });
      Driver.hasOne(models.MachineOwner, {
        foreignKey: "driver_id",
      });
      Driver.hasOne(models.Route, {
        foreignKey: "driver_id",
      });
      Driver.belongsTo(models.User, {
        foreignKey: "user_id",
      });
      Driver.belongsTo(models.Location, {
        foreignKey: "location_id",
      });
    }
    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  Driver.init(
    //attributes
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      driver_licence_number: {
        type: DataTypes.STRING(20),
        unique: true,
        allowNull: false,
      },
      expiring_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      location_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      working: {
        type: DataTypes.BOOLEAN,
        defaultValue: function () {
          return 0;
        },
        allowNull: false,
      },
    },
    //options
    {
      sequelize,
      tableName: "drivers",
      modelName: "Driver",
    }
  );
  return Driver;
};
