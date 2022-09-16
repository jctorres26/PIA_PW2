const express = require('express');
const router = express.Router();

const usuario_controller = require('../controllers/usuarioController');


router.get("/getUsuario", usuario_controller.usuario_get);
router.post("/usuario", usuario_controller.usuario_create);

module.exports = router;