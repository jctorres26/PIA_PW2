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

exports.admin_login= async (req, res) => {

  const {body: {user, pass}} = req;

  const data = await Admin.findOne({usuario: user, password: pass});

  res.send(data);
  
};

