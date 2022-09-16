//mes_mas_preguntas


const Mes_mas_preguntas = require("../models/mes_mas_preguntasSchema");

exports.mes_mas_preguntas_create = async (req, res) => {
  const { body: mes_mas_preguntas } = req;

  const mes_mas_preguntasDB = new Mes_mas_preguntas(mes_mas_preguntas);

  await mes_mas_preguntasDB.save().catch((err) => console.log("UPS!", err));

  res.send({
    message: "mes_mas_preguntas creado con exito",
    data: mes_mas_preguntasDB,
  });
};

exports.mes_mas_preguntas_get = async (req, res) => {
  res.send({
    message: "get mes_mas_preguntas",
  });
};
