const express = require('express');
const router = express.Router();

const respuesta_controller = require('../controllers/respuestaController');


router.get("/getRespuesta", respuesta_controller.respuesta_get);
router.post("/respuesta", respuesta_controller.respuesta_create);
router.put("/respuestaAccept/:id", respuesta_controller.respuesta_accept);
router.delete("/respuestaDecline/:id", respuesta_controller.respuesta_decline);
router.get("/getRespuestaByUserId/:id", respuesta_controller.respuesta_getByUserId);

module.exports = router;