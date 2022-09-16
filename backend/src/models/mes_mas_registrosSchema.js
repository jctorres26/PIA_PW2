//mes_mas_registros
const mongoose = require('mongoose');

const Mes_mas_registrosSchema = mongoose.Schema({
    num_mes: {
        type: Number
    },
    num_anio: {
        type: Number
    }
    ,
    usuarios_registrados: {
        type: Number
    }
    
});

const Mes_mas_registros = mongoose.model("mes_mas_registros", Mes_mas_registrosSchema, "mes_mas_registros");

module.exports = Mes_mas_registros;