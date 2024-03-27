// app.js
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const homeRoutes = require('./routes/homeRoutes');

// Configuración de middleware
app.use(bodyParser.urlencoded({ extended: true })); // Middleware body-parser
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Rutas
app.use('/', userRoutes);
app.use('/', homeRoutes);


// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
