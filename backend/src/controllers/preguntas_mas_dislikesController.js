const Preguntas_mas_dislikes = require("../models/preguntas_mas_dislikesSchema");
const Pregunta = require("../models/preguntaSchema");
const Dislikes = require("../models/dislikeSchema");

exports.preguntas_mas_dislikes_create = async (req, res) => {
  const { body: preguntas_mas_dislikes } = req;

  const preguntas_mas_dislikesDB = new Preguntas_mas_dislikes(preguntas_mas_dislikes);

  await preguntas_mas_dislikesDB.save().catch((err) => console.log("UPS!", err));

  res.send({
    message: "preguntas_mas_dislikes creado con exito",
    data: preguntas_mas_dislikesDB,
  });
};

exports.preguntas_mas_dislikes_update = async (req, res) => {
  

  const{params: {id}} = req;

  var count = await Dislikes.count({id_pregunta:id});

  const data = await Preguntas_mas_dislikes.findOneAndUpdate({id_pregunta: id}, {cantidad_dislikes: count});

  res.send(data);
};

exports.preguntas_mas_dislikes_get = async (req, res) => {

  const data = await Preguntas_mas_dislikes.find().populate("id_pregunta");

  res.send(data);
 

};

//preguntas_mas_likes