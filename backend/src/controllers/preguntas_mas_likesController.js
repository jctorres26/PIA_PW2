const Preguntas_mas_likes = require("../models/preguntas_mas_likesSchema");

exports.preguntas_mas_likes_create = async (req, res) => {
  const { body: preguntas_mas_likes } = req;

  const preguntas_mas_likesDB = new Preguntas_mas_likes(preguntas_mas_likes);

  await preguntas_mas_likesDB.save().catch((err) => console.log("UPS!", err));

  res.send({
    message: "preguntas_mas_likes creado con exito",
    data: preguntas_mas_likesDB,
  });
};

exports.preguntas_mas_likes_get = async (req, res) => {
  res.send({
    message: "get preguntas_mas_likes",
  });
};

//preguntas_mas_likes