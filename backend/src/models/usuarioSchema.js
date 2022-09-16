const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    }
    ,
    fecha_registro: {
        type: Date
    }
    ,
    fecha_nacimiento: {
        type: Date
    }
});

const Usuario = mongoose.model("usuario", usuarioSchema, "usuario");

module.exports = Usuario;