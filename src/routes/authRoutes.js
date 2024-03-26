// authRoutes.js
const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');

// Ruta para mostrar el formulario de inicio de sesión
router.get('/login', (req, res) => {
    res.render('login', { error: null });
});

// Ruta para procesar el inicio de sesión
router.post('/login', AuthController.login);

module.exports = router;
