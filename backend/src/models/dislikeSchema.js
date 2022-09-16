const mongoose = require('mongoose');

const DislikeSchema = mongoose.Schema({
 
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

const Dislike = mongoose.model("dislike", DislikeSchema, "dislike");

module.exports = Dislike;