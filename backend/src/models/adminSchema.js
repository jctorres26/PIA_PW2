const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    usuario: {
        type: String,
        required: true,
        minlength: 4,
        maxLength:20,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxLength:20,
    }
});

const Admin = mongoose.model("admin", AdminSchema, "admin");

module.exports = Admin;