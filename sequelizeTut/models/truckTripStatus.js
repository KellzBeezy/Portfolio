"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TruckTripStatus extends Model {
    /**
     * ?Helper method for defining associations.
     * ?This method is not a part of Sequelize lifecycle.
     * ?The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //Location.BelongsTo(company);
    }
    /*toJSON() {
      return { ...this.get(), id: undefined };
    }*/
  }
  TruckTripStatus.init(
    //attributes
    {
      status_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status_details: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      //options

      sequelize,
      tableName: "truck_trip_status",
      modelName: "TruckTripStatus",
    }
  );
  return TruckTripStatus;
};
