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

exports.usuario_login= async (req, res) => {

  const {body: {user, pass}} = req;

  const data = await Usuario.findOne({usuario: user, password: pass});

  res.send(data);
  
};
