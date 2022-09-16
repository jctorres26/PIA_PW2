//categorias_mas_preguntas
const express = require('express');
const router = express.Router();

const categorias_mas_preguntas_controller = require('../controllers/categorias_mas_preguntasController');


router.get("/getCategorias_mas_preguntas", categorias_mas_preguntas_controller.categorias_mas_preguntas_get);
router.post("/categorias_mas_preguntas", categorias_mas_preguntas_controller.categorias_mas_preguntas_create);

module.exports = router;