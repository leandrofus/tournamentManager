const express = require('express');
const sequelize = require('./config/database');
const dotenv = require('dotenv');
const cors = require('cors');
const exphbs = require('express-handlebars');
const path = require('path');

const Jugador = require('./models/Jugador');
const Partido = require('./models/Partido');

dotenv.config();

const app = express();
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const datos = {
        titulo: 'Bienvenido a la Liga de Torneos',
        descripcion: 'Administra jugadores y partidos en nuestra plataforma',
    };
    res.render('home', datos);
});
app.get('/jugadores', async (req, res) => {
    const jugadores = await Jugador.findAll();
    const jugadoresPlain = jugadores.map(jugador => jugador.get({ plain: true }));
    console.log(jugadoresPlain);

    res.render('jugadores', { jugadores: jugadoresPlain });
});

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

sequelize.sync({ force: false }).then(() => {
    console.log('Tablas sincronizadas');
});

app.use('/api/jugadores', require('./routes/jugadores'));
app.use('/api/partidos', require('./routes/partidos'));
app.use('/api/ligas', require('./routes/ligas'));

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
