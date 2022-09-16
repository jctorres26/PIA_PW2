const express = require('express');
const router = express.Router();

const pregunta_controller = require('../controllers/preguntaController');


router.get("/getPregunta", pregunta_controller.pregunta_get);
router.post("/pregunta", pregunta_controller.pregunta_create);

module.exports = router;