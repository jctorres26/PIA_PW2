const Like = require("../models/likeSchema");

exports.like_create = async (req, res) => {
  const { body: like } = req;

  const likeDB = new Like(like);

  await likeDB.save().catch((err) => console.log("UPS!", err));

  res.send({
    message: "like creado con exito",
    data: likeDB,
  });
};

exports.like_get = async (req, res) => {
  res.send({
    message: "get like",
  });
};

