const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home-controllers');

router.get('/',homeController.home);



router.use('/users/', require('./users.js'));

router.use('/posts/', require('./posts.js'));

router.use('/comments/', require('./comments.js'));

router.use('/likes/', require('./likes.js'));

router.use('/api' , require('./api'));

module.exports = router ;

// console.log('router loaded ..');


