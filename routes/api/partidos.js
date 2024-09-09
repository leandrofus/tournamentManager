const express = require('express');
const router = express.Router();
const Partido = require('../../models/Partido');
const Jugador = require('../../models/Jugador');

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
