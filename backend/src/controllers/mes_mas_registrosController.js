//mes_mas_registros


const Mes_mas_registros = require("../models/mes_mas_registrosSchema");

exports.mes_mas_registros_create = async (req, res) => {
  const { body: mes_mas_registros } = req;

  const mes_mas_registrosDB = new Mes_mas_registros(mes_mas_registros);

  await mes_mas_registrosDB.save().catch((err) => console.log("UPS!", err));

  res.send({
    message: "mes_mas_registros creado con exito",
    data: mes_mas_registrosDB,
  });
};

exports.mes_mas_registros_get = async (req, res) => {
  res.send({
    message: "get mes_mas_registros",
  });
};
