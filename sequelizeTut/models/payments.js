"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * ?Helper method for defining associations.
     * ?This method is not a part of Sequelize lifecycle.
     * ?The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //Location.BelongsTo(company);
    }
    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  Payment.init(
    //attributes
    {
      type_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      //options

      sequelize,
      tableName: "payments",
      modelName: "Payment",
    }
  );
  return Payment;
};
