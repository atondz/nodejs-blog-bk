
const express = require('express');
const router = express.Router();
const homeController = require('../app/controllers/HomeController');


router.use('/search', homeController.search);
router.use('/', homeController.home);


module.exports = router;