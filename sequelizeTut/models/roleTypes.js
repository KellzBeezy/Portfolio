"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RoleTypes extends Model {
    /**
     * ?Helper method for defining associations.
     * ?This method is not a part of Sequelize lifecycle.
     * ?The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RoleTypes.hasOne(models.User, { foreignKey: "role" });
    }
    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  RoleTypes.init(
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
      tableName: "role_types",
      modelName: "RoleTypes",
    }
  );
  return RoleTypes;
};
