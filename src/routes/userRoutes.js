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


module.exports = router;
