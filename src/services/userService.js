// authService.js
const UserModel = require('../models/userModel');

// Simula una base de datos de usuarios
const users = [];

function authenticate(username, password) {
    const user = users.find(user => user.username === username && user.password === password);
    return user;
}
function createUser(username, password) {
    // Verificar si el usuario ya existe
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return null; // Usuario ya registrado
    }
    const newUser = new UserModel(username, password);
    users.push(newUser);
    return newUser;
}

module.exports = { authenticate, createUser };
