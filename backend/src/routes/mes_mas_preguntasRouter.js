//mes_mas_preguntas

const express = require('express');
const router = express.Router();

const mes_mas_preguntas_controller = require('../controllers/mes_mas_preguntasController');


router.get("/getMes_mas_preguntas", mes_mas_preguntas_controller.mes_mas_preguntas_get);
router.post("/mes_mas_preguntas", mes_mas_preguntas_controller.mes_mas_preguntas_create);

module.exports = router;