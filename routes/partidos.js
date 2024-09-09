const express = require('express');
const router = express.Router();
const Partido = require('../models/Partido');
const Jugador = require('../models/Jugador');

router.get('/', async (req, res) => {
  try {
    const partidos = await Partido.findAll({ include: ['jugadorLocal', 'jugadorVisitante'] });
    res.json(partidos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const partido = await Partido.create({
      jugadorLocalId: req.body.jugadorLocalId,
      jugadorVisitanteId: req.body.jugadorVisitanteId,
      fecha: req.body.fecha,
      resultadoLocal: req.body.resultadoLocal,
      resultadoVisitante: req.body.resultadoVisitante,
    });
    res.status(201).json(partido);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
