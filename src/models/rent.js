'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rent.init({
    userId: DataTypes.INTEGER,
    status: DataTypes.STRING,
    carId: DataTypes.INTEGER,
    isWithDriver: DataTypes.BOOLEAN,
    dayOut: DataTypes.DATE,
    dayIn: DataTypes.DATE,
    dayReturned: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Rent',
  });
  return Rent;
};