const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Jugador = require('./Jugador');

const Partido = sequelize.define('Partido', {
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  resultadoLocal: {
    type: DataTypes.INTEGER,
  },
  resultadoVisitante: {
    type: DataTypes.INTEGER,
  },
});

Partido.belongsTo(Jugador, { as: 'jugadorLocal' });
Partido.belongsTo(Jugador, { as: 'jugadorVisitante' });

module.exports = Partido;