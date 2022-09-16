const express = require('express');
const router = express.Router();

const like_controller = require('../controllers/likeController');


router.get("/getLike", like_controller.like_get);
router.post("/like", like_controller.like_create);

module.exports = router;