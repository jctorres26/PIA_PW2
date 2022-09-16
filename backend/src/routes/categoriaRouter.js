const express = require('express');
const router = express.Router();

const categoria_controller = require('../controllers/categoriaController');


router.get("/getCategoria", categoria_controller.categoria_get);
router.post("/categoria", categoria_controller.categoria_create);

module.exports = router;