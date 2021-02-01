"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * ?Helper method for defining associations.
     * ?This method is not a part of Sequelize lifecycle.
     * ?The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Login, { foreignKey: "email" });
      User.hasOne(models.Client, { foreignKey: "user_id" });
      User.hasOne(models.Driver, { foreignKey: "user_id" });
      User.hasOne(models.Admin, { foreignKey: "user_id" });
      User.belongsTo(models.RoleTypes, { foreignKey: "role" });
    }
    /*toJSON() {
      return { ...this.get(), id: undefined };
    }*/
  }
  User.init(
    {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING(6),
        allowNull: false,
      },

      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      birth_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      role: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "users",
      modelName: "User",
    }
  );
  return User;
};
