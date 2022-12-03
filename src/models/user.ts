'use strict';
import {
  Model
} from 'sequelize'

interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
  fotoId: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models: any) {
      // define association here
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fotoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    fotoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};