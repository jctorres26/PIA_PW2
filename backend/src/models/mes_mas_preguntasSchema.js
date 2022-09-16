////mes_mas_preguntas
const mongoose = require('mongoose');

const Mes_mas_preguntasSchema = mongoose.Schema({
    num_mes: {
        type: Number
    },
    num_anio: {
        type: Number
    }
    ,
    preguntas_realizadas: {
        type: Number
    }
    
});

const Mes_mas_preguntas = mongoose.model("mes_mas_preguntas", Mes_mas_preguntasSchema, "mes_mas_preguntas");

module.exports = Mes_mas_preguntas;