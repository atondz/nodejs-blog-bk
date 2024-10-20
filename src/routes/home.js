const express = require('express');
const router = express.Router();
const homeController = require('../app/controllers/HomeController');

// Sử dụng router.get() cho các route
router.get('/search', homeController.search);
router.get('/users', homeController.getAllUser); // Đảm bảo tên phương thức khớp
router.get('/', homeController.home);

module.exports = router;
