//preguntas_mas_dislikes
const express = require('express');
const router = express.Router();

const preguntas_mas_dislikes_controller = require('../controllers/preguntas_mas_dislikesController');


router.get("/getPreguntasMasDislikes", preguntas_mas_dislikes_controller.preguntas_mas_dislikes_get);
router.post("/preguntasMasDislikes", preguntas_mas_dislikes_controller.preguntas_mas_dislikes_create);
router.put("/preguntasMasDislikes/update/:id", preguntas_mas_dislikes_controller.preguntas_mas_dislikes_update);

module.exports = router;