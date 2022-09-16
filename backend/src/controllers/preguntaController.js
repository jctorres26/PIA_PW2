const Pregunta = require("../models/preguntaSchema");

exports.pregunta_create = async (req, res) => {
  const { body: pregunta } = req;

  const preguntaDB = new Pregunta(pregunta);

  await preguntaDB.save().catch((err) => console.log("UPS!", err));

  res.send({
    message: "Pregunta creado con exito",
    data: preguntaDB,
  });
};

exports.pregunta_get = async (req, res) => {
  res.send({
    message: "get pregunta",
  });
};

//"descripcion": "Comedia"