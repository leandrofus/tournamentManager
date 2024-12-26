import express, { Request, Response } from 'express';

const Matches = express.Router();

Matches.post('/', async (req: Request, res: Response) => {
  // try {
  //   const partido = new Partido({
  //     jugadorLocalId: req.body.jugadorLocalId,
  //     jugadorVisitanteId: req.body.jugadorVisitanteId,
  //     fecha: req.body.fecha,
  //     resultadoLocal: req.body.resultadoLocal,
  //     resultadoVisitante: req.body.resultadoVisitante
  //   });
  //   await partido.save();
  //   res.status(201).json(partido);
  // } catch (err) {
  //   res.status(400).json({ message: (err as Error).message });
  // }
});

export default Matches; 