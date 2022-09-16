const express = require('express');
const router = express.Router();

const favorito_controller = require('../controllers/favoritoController');


router.get("/getFavorito", favorito_controller.favorito_get);
router.post("/favorito", favorito_controller.favorito_create);

module.exports = router;