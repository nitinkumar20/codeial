const express = require('express');

const router = express.Router();

const userController = require('../controllers/users-controllers');

router.get('/profile/', userController.profile);

router.get('/sign-up/', userController.signup);

router.get('/sign-in/',userController.signin);

module.exports = router ;



