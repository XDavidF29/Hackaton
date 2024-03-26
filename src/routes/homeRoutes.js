// homeRoutes.js
const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/homeController');

// Ruta para la página de inicio
router.get('/', HomeController.home);

module.exports = router;
