//categorias_mas_preguntas
const Categorias_mas_preguntas = require("../models/categorias_mas_preguntasSchema");
const Categoria = require("../models/categoriaSchema");
const Pregunta = require("../models/preguntaSchema");


exports.categorias_mas_preguntas_create = async (req, res) => {
  const { body: categorias_mas_preguntas } = req;

  const categorias_mas_preguntasDB = new Categorias_mas_preguntas(categorias_mas_preguntas);

  await categorias_mas_preguntasDB.save().catch((err) => console.log("UPS!", err));

  res.send({
    message: "categorias_mas_preguntas creado con exito",
    data: categorias_mas_preguntasDB,
  });
};

exports.categorias_mas_preguntas_update = async (req, res) => {
  

  const{params: {id}} = req;

  var count = await Pregunta.count({id_categoria:id});

  const data = await Categorias_mas_preguntas.findOneAndUpdate({id_categoria: id}, {cantidad_preguntas: count});

  res.send(data);
};

exports.categorias_mas_preguntas_get = async (req, res) => {

  const data = await Categorias_mas_preguntas.find().populate("id_categoria");

  res.send(data);
 

};

