const express = require('express');
const router = express.Router();
const Jugador = require('../../models/Jugador');
const Partido = require('../../models/Partido');
router.get('/', (req, res) => {
    const datos = {
        titulo: 'Bienvenido a la Liga de Torneos',
        descripcion: 'Administra jugadores y partidos en nuestra plataforma',
    };
    res.render('home', datos);
});
router.get('/jugadores', async (req, res) => {
    const jugadores = await Jugador.findAll();
    const jugadoresPlain = jugadores.map(jugador => jugador.get({ plain: true }));
    console.log(jugadoresPlain);

    res.render('jugadores', { jugadores: jugadoresPlain });
});

router.get('/partidos', async (req, res) => {
    try {
      const partidos = await Partido.findAll({ include: ['jugadorLocal', 'jugadorVisitante'] });
      const partidosPlain = partidos.map(data => data.get({ plain: true }));

      res.render('partidos', { partidos: partidosPlain });

    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
module.exports = router;
