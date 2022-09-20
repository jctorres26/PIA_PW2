//preguntas_mas_likes
const mongoose = require('mongoose');

const Preguntas_mas_likesSchema = mongoose.Schema({

    cantidad_likes: {
        type: Number
    }
    
    ,
    id_pregunta: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "pregunta"
    }
});

const Preguntas_mas_likes = mongoose.model("pregunta_mas_likes", Preguntas_mas_likesSchema, "pregunta_mas_likes");

module.exports = Preguntas_mas_likes;