import express, { Request, Response } from 'express';
// import Jugador from '../../models/Jugador';

const Views = express.Router();

Views.get('/', (req: Request, res: Response) => {
  const datos = {
    titulo: 'Bienvenido a la Liga de Torneos',
    descripcion: 'Administra jugadores y partidos en nuestra plataforma',
  };
  res.render('home', datos);
});

Views.get('/jugadores', async (req: Request, res: Response) => {
  // try {
  //   const jugadores = await Jugador.find();
  //   const jugadoresPlain = jugadores.map((jugador: any) => jugador.toObject());
  //   res.render('jugadores', { jugadores: jugadoresPlain });
  // } catch (err) {
  //   res.status(500).json({ message: (err as Error).message });
  // }
});

Views.get('/partidos', async (req: Request, res: Response) => {
  // try {
  //   const partidos = await Partidos.find();
  //   const partidosPlain = partidos.map((data: any) => data.toObject());
  //   res.render('partidos', { partidos: partidosPlain });
  // } catch (err) {
  //   res.status(500).json({ message: (err as Error).message });
  // }
});

export default Views; 