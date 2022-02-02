const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class BarList extends Model {}
BarList.init({
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  brewery_type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  street: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  website_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  modelName: "BarList",

});

module.exports = BarList;
