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
    }
    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  Driver.init(
    //attributes
    {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validation: {
          len: [3, 15],
        },
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validation: {
          len: [2, 15],
        },
      },
      birth_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
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
