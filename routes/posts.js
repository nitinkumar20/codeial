const express = require('express');
const passport = require('passport');
const router = express.Router();

const postsController = require('../controllers/posts-controllers');

router.post('/create/' ,passport.checkAuthentication ,  postsController.create);

module.exports = router ;
