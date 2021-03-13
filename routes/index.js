const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home-controllers');

router.get('/',homeController.home);



router.use('/users/', require('./users.js'));

router.use('/posts/', require('./posts.js'));



module.exports = router ;

// console.log('router loaded ..');


