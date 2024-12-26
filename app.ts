import express, { Application, json } from 'express';
import { initViewEngine } from './src/config/initViewEngine';
import router from './src/routes';


const app: Application = express();
app.use(json());
initViewEngine(app);
app.use(router);

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});