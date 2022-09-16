const Respuesta = require("../models/respuestaSchema");

exports.respuesta_create = async (req, res) => {
  const { body: respuesta } = req;

  const respuestaDB = new Respuesta(respuesta);

  await respuestaDB.save().catch((err) => console.log("UPS!", err));

  res.send({
    message: "respuesta creado con exito",
    data: respuestaDB,
  });
};

exports.respuesta_get = async (req, res) => {
  res.send({
    message: "get respuesta",
  });
};

