//preguntas_mas_likes
const express = require('express');
const router = express.Router();

const preguntas_mas_likes_controller = require('../controllers/preguntas_mas_likesController');


router.get("/getPreguntasMasLikes", preguntas_mas_likes_controller.preguntas_mas_likes_get);
router.post("/preguntasMasLikes", preguntas_mas_likes_controller.preguntas_mas_likes_create);
router.put("/preguntasMasLikes/update/:id", preguntas_mas_likes_controller.preguntas_mas_likes_update);

module.exports = router;