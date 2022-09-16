const mongoose = require('mongoose');

const FavoritoSchema = mongoose.Schema({
 
    fecha_pregunta: {
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

const Favorito = mongoose.model("favorita", FavoritoSchema, "favorita");

module.exports = Favorito;