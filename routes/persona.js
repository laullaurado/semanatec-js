const express = require('express');
const router = express.Router();
const personaController = require('../controllers/persona');

// Rutas de mi controller
router.post('/agregarPersona', personaController.postAgregarPersona);
router.get('/consultarPersonas', personaController.getConsultarPersonas);

module.exports = router;
