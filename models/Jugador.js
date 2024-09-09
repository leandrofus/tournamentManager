const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Jugador = sequelize.define('Jugador', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ranking: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  edad: {
    type: DataTypes.INTEGER,
  },
  nacionalidad: {
    type: DataTypes.STRING,
  },
});

module.exports = Jugador;