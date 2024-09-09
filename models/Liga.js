const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Jugador = require('./Jugador');

const Liga = sequelize.define('Liga', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechaInicio: {
    type: DataTypes.DATE,
    allowNull: false,
  }
});

Liga.belongsToMany(Jugador, { through: 'LigaJugadores' });

module.exports = Liga;
