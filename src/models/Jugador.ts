import mongoose, { Schema, Document } from 'mongoose';

interface IJugador extends Document {
  nombre: string;
  edad: number;
  equipo?: string;
}

const JugadorSchema: Schema = new Schema({
  nombre: { type: String, required: true },
  edad: { type: Number, required: true },
  equipo: { type: String }
});

const Jugador = mongoose.model<IJugador>('Jugador', JugadorSchema);

export default Jugador;