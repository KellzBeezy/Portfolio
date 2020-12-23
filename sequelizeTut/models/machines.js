"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Machine extends Model {
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
  Machine.init(
    //attributes
    {
      license_plate: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: true,
      },
      model: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      condition_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      keywords: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    //options
    {
      sequelize,
      tableName: "machines",
      modelName: "Machine",
    }
  );
  return Machine;
};
