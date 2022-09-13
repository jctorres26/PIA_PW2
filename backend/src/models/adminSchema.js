const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    usuario: {
        type: String
    },
    password: {
        type: String
    }
});

const Admin = mongoose.model("admin", AdminSchema, "admin");

module.exports = Admin;