'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Car.init({
    title: DataTypes.STRING,
    type: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    isAvailable: DataTypes.BOOLEAN,
    licensePlate: DataTypes.STRING,
    photoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};