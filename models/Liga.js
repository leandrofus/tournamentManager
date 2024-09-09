const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Liga = sequelize.define('Liga', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fechaInicio: {
    type: DataTypes.DATE,
    allowNull: false
  }
});


module.exports = Liga;
