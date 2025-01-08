// src/routes/formularioRoutes.js
const express = require('express');
const router = express.Router();
const formularioController = require('../controllers/formularioController');

// Rota para enviar o formulário
router.post('/enviar-formulario', formularioController.enviarFormulario);

module.exports = router;
