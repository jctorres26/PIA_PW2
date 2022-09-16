//preguntas_mas_likes
const express = require('express');
const router = express.Router();

const preguntas_mas_likes_controller = require('../controllers/preguntas_mas_likesController');


router.get("/getPreguntas_mas_likes", preguntas_mas_likes_controller.preguntas_mas_likes_get);
router.post("/preguntas_mas_likes", preguntas_mas_likes_controller.preguntas_mas_likes_create);

module.exports = router;