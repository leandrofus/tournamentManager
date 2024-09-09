const Jugador = require('./Jugador');
const Liga = require('./Liga');
const Partido = require('./Partido');

Jugador.belongsToMany(Liga, { through: 'LigaJugadores' });
Liga.belongsToMany(Jugador, { through: 'LigaJugadores' });
Partido.belongsTo(Jugador, { as: 'jugadorLocal' });
Partido.belongsTo(Jugador, { as: 'jugadorVisitante' });

module.exports = { Jugador, Liga };
