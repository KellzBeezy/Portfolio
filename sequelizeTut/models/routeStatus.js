"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RouteStatus extends Model {
    /**
     * ?Helper method for defining associations.
     * ?This method is not a part of Sequelize lifecycle.
     * ?The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RouteStatus.belongsTo(models.Status, { foreignKey: "status_id" });
    }
    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  RouteStatus.init(
    //attributes
    {
      start: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      status_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      distance: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
    },
    {
      //options

      sequelize,
      tableName: "route_status",
      modelName: "RouteStatus",
    }
  );
  return RouteStatus;
};
