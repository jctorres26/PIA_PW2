const mongoose = require('mongoose');

const FavoritoSchema = mongoose.Schema({
 
    fecha_pregunta: {
        type: Date,
        required: true,

    },
   
    id_usuario: [{
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuario"
    }]
    ,
    id_pregunta: [{
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "pregunta"
    }]
});

const Favorito = mongoose.model("favorita", FavoritoSchema, "favorita");

module.exports = Favorito;