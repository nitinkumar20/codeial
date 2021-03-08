const express = require('express');

const router = express.Router();

const homeConroller = require('../controllers/home-controllers');

router.get('/',homeConroller.home);



module.exports = router ;

// console.log('router loaded ..');


