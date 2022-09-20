//mes_mas_registros
const mongoose = require('mongoose');

const Mes_mas_registrosSchema = mongoose.Schema({
    num_mes: {
        type: Number,
        required: true
    },
    num_anio: {
        type: Number,
        required: true
    }
    ,
    usuarios_registrados: {
        type: Number,
        required: true
    }
    
});

const Mes_mas_registros = mongoose.model("mes_mas_registros", Mes_mas_registrosSchema, "mes_mas_registros");

module.exports = Mes_mas_registros;