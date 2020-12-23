"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MachineTypes extends Model {
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
  MachineTypes.init(
    //attributes
    {
      type_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    //options
    {
      sequelize,
      tableName: "machine_types",
      modelName: "MachineTypes",
    }
  );
  return MachineTypes;
};
