// authService.js
const UserModel = require('../models/userModel');

// Simula una base de datos de usuarios
const users = [
    new UserModel('usuario1', 'contraseña1'),
    new UserModel('usuario2', 'contraseña2')
];

function authenticate(username, password) {
    const user = users.find(user => user.username === username && user.password === password);
    return user;
}

module.exports = { authenticate };
