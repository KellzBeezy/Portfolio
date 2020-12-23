"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
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
  Company.init(
    //attributes
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING(13),
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: { message: "Must be a valid email address!" },
        },
      },
      registerd: {
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
      tableName: "company",
      modelName: "Company",
    }
  );
  return Company;
};
