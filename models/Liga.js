const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Asegúrate de que este es el archivo de conexión
const Jugador = require('./Jugador'); // Importa el modelo relacionado

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

// Liga.belongsToMany(Jugador, { through: 'LigaJugadores' });

module.exports = Liga;
