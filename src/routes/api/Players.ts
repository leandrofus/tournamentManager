import express, { Request, Response } from 'express';
import Jugador from '../../models/Jugador';

const Players = express.Router();

Players.get('/', async (req: Request, res: Response) => {
  try {
    const jugadores = await Jugador.find();
    res.json(jugadores);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
});

Players.post('/', async (req: Request, res: Response) => {
  try {
    const nuevoJugador = await Jugador.create(req.body);
    res.status(201).json(nuevoJugador);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
});

export default Players;