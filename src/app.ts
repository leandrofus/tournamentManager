import express, { Application, json } from 'express';
var morgan = require("morgan");

import { initViewEngine } from './config/initViewEngine';
import { initRouting } from './routes';


const app: Application = express();
app.use(express.urlencoded({ extended: true }));
app.use(json());
initViewEngine(app);
initRouting(app);
app.use(morgan("dev"));

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});