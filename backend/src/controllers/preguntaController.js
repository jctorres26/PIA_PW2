const Pregunta = require("../models/preguntaSchema");

exports.pregunta_create = async (req, res) => {
  const { body: pregunta } = req;

  const preguntaDB = new Pregunta(pregunta);

  await preguntaDB.save().catch((err) => console.log("UPS!", err));

  res.send({
    message: "Pregunta creada con exito",
    data: preguntaDB,
  });
};

exports.pregunta_getRandom = async (req, res) => {

  var size = await Pregunta.count({respondida:false});

  var random = Math.floor(Math.random() * size);

  console.log(size);
 

  const data = await Pregunta.findOne({respondida:false}).skip(random).populate("id_categoria");

  res.send(data);
};

exports.pregunta_getByUserId = async (req, res) => {

  const{params: {id}} = req;
 

  const data = await Pregunta.find({respondida:false, id_usuario: id});

  res.send(data);
};


