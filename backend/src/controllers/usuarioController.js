const Usuario = require("../models/usuarioSchema");

exports.usuario_create = async (req, res) => {
  const { body: usuario } = req;

  const usuarioDB = new Usuario(usuario);

  await usuarioDB.save().catch((err) => console.log("UPS!", err));

  res.send({
    message: "usuario creado con exito",
    data: usuarioDB,
  });
};

exports.usuario_get = async (req, res) => {
  res.send({
    message: "get usuario",
  });
};

