"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MachineOwner extends Model {
    /**
     * ?Helper method for defining associations.
     * ?This method is not a part of Sequelize lifecycle.
     * ?The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MachineOwner.belongsTo(models.Driver, {
        foreignKey: "driver_id",
      });
      MachineOwner.belongsTo(models.Company, {
        foreignKey: "company_id",
      });
      MachineOwner.belongsTo(models.Machine, {
        foreignKey: "machine_id",
      });
    }
    toJSON() {
      return { ...this.get(), id: undefined };
    }
  }
  MachineOwner.init(
    //attributes
    {
      machine_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      driver_id: {
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
      tableName: "machine_owners",
      modelName: "MachineOwner",
    }
  );
  return MachineOwner;
};
