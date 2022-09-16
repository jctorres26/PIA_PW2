//categorias_mas_preguntas
const Categorias_mas_preguntas = require("../models/categorias_mas_preguntasSchema");

exports.categorias_mas_preguntas_create = async (req, res) => {
  const { body: categorias_mas_preguntas } = req;

  const categorias_mas_preguntasDB = new Categorias_mas_preguntas(categorias_mas_preguntas);

  await categorias_mas_preguntasDB.save().catch((err) => console.log("UPS!", err));

  res.send({
    message: "categorias_mas_preguntas creado con exito",
    data: categorias_mas_preguntasDB,
  });
};

exports.categorias_mas_preguntas_get = async (req, res) => {
  res.send({
    message: "get categorias_mas_preguntas",
  });
};

