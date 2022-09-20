const mongoose = require('mongoose');

const CategoriaSchema = mongoose.Schema({
    descripcion: {
        type: String,
        required: true,
        minlength: 10,
        maxLength:500,
    }
});

const Categoria = mongoose.model("categoria", CategoriaSchema, "categoria");

module.exports = Categoria;