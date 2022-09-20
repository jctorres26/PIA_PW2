//preguntas_mas_dislikes
const mongoose = require('mongoose');

const Preguntas_mas_dislikesSchema = mongoose.Schema({

    cantidad_dislikes: {
        type: Number
    }
    
    ,
    id_pregunta: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "pregunta"
    }
});

const Preguntas_mas_dislikes = mongoose.model("pregunta_mas_dislikes", Preguntas_mas_dislikesSchema, "pregunta_mas_dislikes");

module.exports = Preguntas_mas_dislikes;