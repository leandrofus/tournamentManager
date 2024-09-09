const express = require('express');
const sequelize = require('./config/database');
const dotenv = require('dotenv');
const cors = require('cors');
const exphbs = require('express-handlebars');
const path = require('path');
const { Jugador, Liga } = require('./models/associations'); // Importa los modelos con relaciones definidas
var session = require("express-session");
var SequelizeStore = require("connect-session-sequelize")(session.Store);

dotenv.config();

// configure express
const app = express();
app.use(
  session({
    secret: "keyboard cat",
    store: new SequelizeStore({
      db: sequelize,
    }),
    resave: false,
    proxy: true,
  })
);



app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

sequelize.sync({ force: false }).then(() => {
    console.log('Tablas sincronizadas');
});

app.use('/api/jugadores', require('./routes/api/jugadores'));
app.use('/api/partidos', require('./routes/api/partidos'));
app.use('/api/ligas', require('./routes/api/ligas'));
app.use('/', require('./routes/front'));

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
