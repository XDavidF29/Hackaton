// authRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Ruta para mostrar el formulario de inicio de sesión
router.get('/login', (req, res) => {
    res.render('login', { error: null });
});

// Ruta para procesar el inicio de sesión
router.post('/login', userController.login);

router.post('/login', userController.login);

router.get('/register', (req, res) => {
    res.render('register', { error: null });
});

router.post('/register', userController.register);

module.exports = router;