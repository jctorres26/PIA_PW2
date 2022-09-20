//categorias_mas_preguntas
const express = require('express');
const router = express.Router();

const categorias_mas_preguntas_controller = require('../controllers/categorias_mas_preguntasController');


router.get("/getCategoriasMasPreguntas", categorias_mas_preguntas_controller.categorias_mas_preguntas_get);
router.post("/categoriasMasPreguntas", categorias_mas_preguntas_controller.categorias_mas_preguntas_create);
router.put("/categoriasMasPreguntas/update/:id", categorias_mas_preguntas_controller.categorias_mas_preguntas_update);

module.exports = router;