// authController.js
const AuthService = require('../services/userService');
const homeRoutes = require('../routes/homeRoutes'); // Importa las rutas necesarias

function login(req, res) {
    const { username, password } = req.body;
    const user = AuthService.authenticate(username, password);
    if (user) {
        // Autenticación exitosa, redirige a la página de inicio
        res.redirect('/'); // Cambia esto según la ruta de tu página de inicio
    } else {
        // Autenticación fallida, muestra un mensaje de error
        res.render('login', { error: 'Credenciales inválidas' });
    }
}

module.exports = { login };
