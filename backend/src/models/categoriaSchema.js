const mongoose = require('mongoose');

const CategoriaSchema = mongoose.Schema({
    descripcion: {
        type: String
    }
});

const Categoria = mongoose.model("categoria", CategoriaSchema, "categoria");

module.exports = Categoria;