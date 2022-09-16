const DisLike = require("../models/dislikeSchema");

exports.dislike_create = async (req, res) => {
  const { body: dislike } = req;

  const dislikeDB = new DisLike(dislike);

  await dislikeDB.save().catch((err) => console.log("UPS!", err));

  res.send({
    message: "dislike creado con exito",
    data: dislikeDB,
  });
};

exports.dislike_get = async (req, res) => {
  res.send({
    message: "get dislike",
  });
};

