const express = require('express');
const router = express.Router();
const Jugador = require('../../models/Jugador');
const Partido = require('../../models/Partido');
const Liga = require('../../models/Liga');

router.post('/', async (req, res) => {
  try {
    const nuevaLiga = await Liga.create({
      nombre: req.body.nombre,
      fechaInicio: req.body.fechaInicio,
    });
    res.status(201).json(nuevaLiga);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
router.post('/addPlayer', async (req, res) => {
  const jugadores = await Jugador.findAll({
    where: { id: req.body.jugadoresIds }
  });

  await nuevaLiga.addJugadors(jugadores); 
})
router.post('/:ligaId/generar-partidos', async (req, res) => {
  try {
    const liga = await Liga.findByPk(req.params.ligaId, { include: Jugador });

    if (!liga) {
      return res.status(404).json({ message: 'Liga no encontrada' });
    }

    const jugadores = lig                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    a.Jugadors;
    let partidos = [];

    for (let i = 0; i < jugadores.length; i++) {
      for (let j = i + 1; j < jugadores.length; j++) {
        const partido = {
          jugadorLocalId: jugadores[i].id,
          jugadorVisitanteId: jugadores[j].id,
          fecha: req.body.fecha, 
        };
        partidos.push(partido);
      }
    }

    const partidosCreados = await Partido.bulkCreate(partidos);
    res.status(201).json(partidosCreados);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
