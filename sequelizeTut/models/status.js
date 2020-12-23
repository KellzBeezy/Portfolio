"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
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
  Status.init(
    //attributes
    {
      status_name: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      //options

      sequelize,
      tableName: "status",
      modelName: "Status",
    }
  );
  return Status;
};
