const Preguntas_mas_likes = require("../models/preguntas_mas_likesSchema");
const Pregunta = require("../models/preguntaSchema");
const Likes = require("../models/likeSchema");

exports.preguntas_mas_likes_create = async (req, res) => {
  const { body: preguntas_mas_likes } = req;

  const preguntas_mas_likesDB = new Preguntas_mas_likes(preguntas_mas_likes);

  await preguntas_mas_likesDB.save().catch((err) => console.log("UPS!", err));

  res.send({
    message: "preguntas_mas_likes creado con exito",
    data: preguntas_mas_likesDB,
  });
};

exports.preguntas_mas_likes_update = async (req, res) => {
  

  const{params: {id}} = req;

  var count = await Likes.count({id_pregunta:id});

  const data = await Preguntas_mas_likes.findOneAndUpdate({id_pregunta: id}, {cantidad_likes: count});

  res.send(data);
};

exports.preguntas_mas_likes_get = async (req, res) => {

  const data = await Preguntas_mas_likes.find().populate("id_pregunta");

  res.send(data);
 

};

//preguntas_mas_likes