const Respuesta = require("../models/respuestaSchema");
const Pregunta = require("../models/preguntaSchema");
const { isValidObjectId } = require("mongoose");

exports.respuesta_create = async (req, res) => {
  const { body: respuesta } = req;

  const respuestaDB = new Respuesta(respuesta);

  

  await respuestaDB.save().catch((err) => console.log("UPS!", err));

  await Pregunta.findByIdAndUpdate(respuestaDB.id_pregunta,{"respondida": true});
 

  res.send({
    message: "respuesta creada con exito",
    data: respuestaDB,
  });
};

exports.respuesta_get = async (req, res) => {

  const data = await Respuesta.find({aceptada: true}).populate("id_pregunta");
  res.send(data);
  
};

exports.respuesta_getByUserId = async (req, res) => {

  const{params: {id}} = req;

  const data = await Respuesta.find({aceptada: true, id_usuario_pregunta: id}).populate({
    path: "id_pregunta",
    match: {id_usuario: id}
  });

  
  res.send(data);
  
};

exports.respuesta_accept = async (req, res) => {

  const{params: {id},} = req;

  const data = await Respuesta.findByIdAndUpdate(id,{"aceptada":true}).populate("id_pregunta");
  res.send(data);
  


};

exports.respuesta_decline = async (req, res) => {

  const{params: {id},} = req;

  var data = await Respuesta.findByIdAndUpdate(id,{"aceptada":false}).populate("id_pregunta");
  await Respuesta.findByIdAndDelete(id);
   await Pregunta.findByIdAndUpdate(data.id_pregunta._id,{"respondida":false});

  res.send(data);
  


};
