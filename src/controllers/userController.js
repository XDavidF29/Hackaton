// authController.js
const AuthService = require('../services/userService');
const UserService = require('../services/userService');

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

function register(req, res) {
    const { username, password } = req.body;
    const newUser = UserService.createUser(username, password);
    if (newUser) {
        res.redirect('/'); // Redirige al usuario a la página de inicio de sesión
    } else {
        res.render('register', { error: 'Error al registrar el usuario' });
    }
}

module.exports = { login, register};
