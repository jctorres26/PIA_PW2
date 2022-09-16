const mongoose = require('mongoose');

const RespuestaSchema = mongoose.Schema({
    descripcion: {
        type: String
    },
    aceptada: {
        type: Boolean
    },
    fecha_publicacion: {
        type: Date
    },
   
    id_usuario: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuario"
    }]
    ,
    id_pregunta: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "pregunta"
    }]
});

const Respuesta = mongoose.model("respuesta", RespuestaSchema, "respuesta");

module.exports = Respuesta;