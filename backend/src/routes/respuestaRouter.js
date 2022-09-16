const express = require('express');
const router = express.Router();

const respuesta_controller = require('../controllers/respuestaController');


router.get("/getRespuesta", respuesta_controller.respuesta_get);
router.post("/respuesta", respuesta_controller.respuesta_create);

module.exports = router;