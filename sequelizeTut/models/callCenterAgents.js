"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CallCenterAgents extends Model {
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
  CallCenterAgents.init(
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
    },
    //options
    {
      sequelize,
      tableName: "call_center_agents",
      modelName: "CallCenterAgents",
    }
  );
  return CallCenterAgents;
};
