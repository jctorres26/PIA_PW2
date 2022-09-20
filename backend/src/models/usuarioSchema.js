const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        maxLength: 80,
        minLength: 8,
        unique: true
    },

    usuario:{
        type: String
    },
    password: {
        type: String,
        required: true,
        maxLength: 40,
        minLength: 4,
        unique: true
    }
    ,
    fecha_registro: {
        type: Date,
        required: true,
    }
    ,
    fecha_nacimiento: {
        type: Date,
        required: true,
    }
});

const Usuario = mongoose.model("usuario", usuarioSchema, "usuario");

module.exports = Usuario;