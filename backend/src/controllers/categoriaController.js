const Categoria = require("../models/categoriaSchema");

exports.categoria_create = async (req, res) => {
  const { body: categoria } = req;

  const categoriaDB = new Categoria(categoria);

  await categoriaDB.save().catch((err) => console.log("UPS!", err));

  res.send({
    message: "categoria creado con exito",
    data: categoriaDB,
  });
};

exports.categoria_get = async (req, res) => {
  res.send({
    message: "get categoria",
  });
};

