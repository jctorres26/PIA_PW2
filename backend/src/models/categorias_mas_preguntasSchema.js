//Categorias_mas_preguntas

const mongoose = require('mongoose');

const Categorias_mas_preguntasSchema = mongoose.Schema({

    cantidad_preguntas: {
        required:true,
        type: Number
    }
    
    ,
    id_categoria: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "categoria"
    }
});

const Categorias_mas_preguntas = mongoose.model("categorias_mas_preguntas", Categorias_mas_preguntasSchema, "categorias_mas_preguntas");

module.exports = Categorias_mas_preguntas;