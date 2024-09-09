const express = require('express');
const router = express.Router();
const Jugador = require('../../models/Jugador');

router.get('/', async (req, res) => {
  try {
    const jugadores = await Jugador.findAll();
    res.json(jugadores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const nuevoJugador = await Jugador.create(req.body);
    res.status(201).json(nuevoJugador);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
