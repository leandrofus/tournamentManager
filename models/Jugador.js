const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Asegúrate de que este es el archivo de conexión
const Liga = require('./Liga'); // Importa el modelo relacionado

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

// Definir la relación muchos a muchos
// Jugador.belongsToMany(Liga, { through: 'LigaJugadores' });

module.exports = Jugador;
