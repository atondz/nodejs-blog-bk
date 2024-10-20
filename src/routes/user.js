
const express = require('express');
const userController = require('../app/controllers/UserController.js');
const router = express.Router();


router.get('/users', userController.users);
router.get('/:slug', userController.getUserDetail);


module.exports = router;
