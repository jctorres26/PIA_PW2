const express = require('express');
const router = express.Router();

const admin_controller = require('../controllers/adminController');


router.post("/adminLogin", admin_controller.admin_login);
router.post("/admin", admin_controller.admin_create);

module.exports = router;