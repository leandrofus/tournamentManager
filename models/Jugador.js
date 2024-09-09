const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Jugador = sequelize.define('Jugador', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ranking: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});


module.exports = Jugador;
