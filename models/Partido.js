const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

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


module.exports = Partido;