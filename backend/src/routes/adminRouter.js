const express = require('express');
const router = express.Router();

const admin_controller = require('../controllers/adminController');


router.get("/getAdmin", admin_controller.admin_get);
router.post("/admin", admin_controller.admin_create);

module.exports = router;