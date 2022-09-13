const Admin = require("../models/adminSchema");

exports.admin_create = async (req, res) => {
  const { body: admin } = req;

  const adminDB = new Admin(admin);

  await adminDB.save().catch((err) => console.log("UPS!", err));

  res.send({
    message: "Admin creado con exito",
    data: adminDB,
  });
};

exports.admin_get = async (req, res) => {
  res.send({
    message: "get admin",
  });
};

