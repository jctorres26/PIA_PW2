const express = require('express');
const router = express.Router();

const usuario_controller = require('../controllers/usuarioController');


router.post("/usuarioLogin", usuario_controller.usuario_login);
router.post("/usuario", usuario_controller.usuario_create);


module.exports = router;