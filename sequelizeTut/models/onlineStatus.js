"use strict";
const { Model, BelongsTo } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OnlineStatus extends Model {
    /**
     * ?Helper method for defining associations.
     * ?This method is not a part of Sequelize lifecycle.
     * ?The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OnlineStatus.belongsTo(models.Location, {
        foreignKey: "location_id",
      });
      OnlineStatus.belongsTo(models.Driver, {
        foreignKey: "driver_id",
      });
    }
    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  OnlineStatus.init(
    //attributes
    {
      driver_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      location_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null,
      },
    },
    {
      //options

      sequelize,
      tableName: "online_status",
      modelName: "OnlineStatus",
    }
  );
  return OnlineStatus;
};
