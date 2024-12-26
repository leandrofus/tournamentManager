import express, { Request, Response } from 'express';

const Tournaments = express.Router();

// Crear nueva liga
Tournaments.post('/', async (req: Request, res: Response) => {
  // try {
  //   const nuevaLiga = await Liga.create({
  //     nombre: req.body.nombre,
  //     fechaInicio: req.body.fechaInicio,
  //   });
  //   res.status(201).json(nuevaLiga);
  // } catch (err) {
  //   res.status(400).json({ message: (err as Error).message });
  // }
});

// Añadir jugadores a una liga
Tournaments.post('/addPlayer', async (req: Request, res: Response) => {
  // try {
  //   const { ligaId, jugadoresIds } = req.body;
    
  //   const liga = await Liga.findByPk(ligaId);
  //   if (!liga) {
  //     res.status(404).json({ message: 'Liga no encontrada' });
  //   }

  //   const jugadores = await Jugador.findAll({
  //     where: { id: jugadoresIds }
  //   });

  //   if (!jugadores.length) {
  //     res.status(404).json({ message: 'No se encontraron jugadores' });
  //   }

  //   await liga?.Jugadors(jugadores);
  //   res.status(200).json({ message: 'Jugadores añadidos a la liga exitosamente' });
  // } catch (err) {
  //   res.status(400).json({ message: (err as Error).message });
  // }
});

// Generar partidos para una liga
Tournaments.post('/:ligaId/generar-partidos', async (req: Request, res: Response) => {
  // try {
  //   const liga = await Liga.findByPk(req.params.ligaId, { 
  //     include: [Jugador] 
  //   });

  //   if (!liga) {
  //     res.status(404).json({ message: 'Liga no encontrada' });
  //   }

  //   if (!liga?.Jugadors || liga?.Jugadors.length < 2) {
  //     res.status(400).json({
  //       message: 'La liga debe tener al menos 2 jugadores para generar partidos' 
  //     });
  //   }

  //   const partidos = liga?.Jugadors.flatMap((jugador1: Jugador, index: number) =>
  //     liga?.Jugadors.slice(index + 1).map((jugador2: Jugador) => ({
  //       jugadorLocalId: jugador1.id,
  //       jugadorVisitanteId: jugador2.id,
  //       fecha: req.body.fecha,
  //       ligaId: liga.id
  //     }))
  //   );

  //   const partidosCreados = await Partido.bulkCreate(partidos);
  //   res.status(201).json(partidosCreados);
  // } catch (err) {
  //   res.status(400).json({ message: (err as Error).message });
  // }
});

export default Tournaments;