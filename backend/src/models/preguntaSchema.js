const mongoose = require('mongoose');

const PreguntaSchema = mongoose.Schema({
    titulo: {
        type: String
    },
    descripcion: {
        type: String
    },
    respondida: {
        type: Boolean
    },
    fecha_publicacion: {
        type: Date,
        default: Date.now
    },
   
    cantidad_likes: {
        type: Number
    }
    ,
    cantidad_dislikes: {
        type: Number
    }
    ,
    id_usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuario"
    }
    ,
    id_categoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categoria"
    }
});

const Pregunta = mongoose.model("pregunta", PreguntaSchema, "pregunta");

module.exports = Pregunta;