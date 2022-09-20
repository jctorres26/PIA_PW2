const mongoose = require('mongoose');

const LikeSchema = mongoose.Schema({
 
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
    }
});

const Like = mongoose.model("like", LikeSchema, "like");

module.exports = Like;