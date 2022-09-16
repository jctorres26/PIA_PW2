const Favorito = require("../models/favoritoSchema");

exports.favorito_create = async (req, res) => {
  const { body: favorito } = req;

  const favoritoDB = new Favorito(favorito);

  await favoritoDB.save().catch((err) => console.log("UPS!", err));

  res.send({
    message: "favorito creado con exito",
    data: favoritoDB,
  });
};

exports.favorito_get = async (req, res) => {
  res.send({
    message: "get favorito",
  });
};

