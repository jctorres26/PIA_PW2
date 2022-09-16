const express = require('express');
const router = express.Router();

const dislike_controller = require('../controllers/dislikeController');


router.get("/getDislike", dislike_controller.dislike_get);
router.post("/dislike", dislike_controller.dislike_create);

module.exports = router;