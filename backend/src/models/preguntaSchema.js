const mongoose = require('mongoose');

const PreguntaSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        minlength: 10,
        maxLength:120
    },
    descripcion: {
        type: String,
        required: true,
        minlength: 10,
        maxLength:500
    },
    respondida: {
        type: Boolean,
        required: true
    },
    fecha_publicacion: {
        type: Date,
        required: true
    }
    ,
    id_usuario: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuario"
    }
    ,
    id_categoria: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "categoria"
    }
});

const Pregunta = mongoose.model("pregunta", PreguntaSchema, "pregunta");

module.exports = Pregunta;