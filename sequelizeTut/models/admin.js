"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * ?Helper method for defining associations.
     * ?This method is not a part of Sequelize lifecycle.
     * ?The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Admin.belongsTo(models.User, { foreignKey: "user_id" });
    }
    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  Admin.init(
    //attributes
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      company_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    //options
    {
      sequelize,
      tableName: "admin",
      modelName: "Admin",
    }
  );
  return Admin;
};
