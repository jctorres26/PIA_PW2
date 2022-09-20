const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    usuario: {
        type: String,
        required: true,
        minlength: 3,
        maxLength:20,
    },
    password: {
        type: String,
        required: true,
        minlength: 3,
        maxLength:20,
    }
});

const Admin = mongoose.model("admin", AdminSchema, "admin");

module.exports = Admin;