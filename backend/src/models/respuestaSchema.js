const mongoose = require('mongoose');

const RespuestaSchema = mongoose.Schema({
    descripcion: {
        type: String,
        required: true,
    minlength: 10,
    maxLength: 500,
    },
    aceptada: {
        type: Boolean,
        required: true,
    },
    fecha_publicacion: {
        type: Date,
        required: true,
    },
   
    id_usuario: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuario"
    }
    ,
    id_pregunta: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "pregunta"
    },
    id_usuario_pregunta: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuario"
    }
});

const Respuesta = mongoose.model("respuesta", RespuestaSchema, "respuesta");

module.exports = Respuesta;