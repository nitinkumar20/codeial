const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home-controllers');

router.get('/',homeController.home);



router.use('/users/', require('./users.js'));





module.exports = router ;

// console.log('router loaded ..');


