import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();

const MongoConnection = mongoose.connect(process.env?.MONGO_URI || '')
  .then(() => console.log('Conexión a MongoDB exitosa'))
  .catch(err => console.error('Error conectando a MongoDB:', err));

export { MongoConnection };
