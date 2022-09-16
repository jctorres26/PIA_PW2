//mes_mas_registros
const express = require('express');
const router = express.Router();

const mes_mas_registros_controller = require('../controllers/mes_mas_registrosController');


router.get("/getMes_mas_registros", mes_mas_registros_controller.mes_mas_registros_get);
router.post("/mes_mas_registros", mes_mas_registros_controller.mes_mas_registros_create);

module.exports = router;