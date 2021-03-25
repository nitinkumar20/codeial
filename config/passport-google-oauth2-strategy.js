const passport = require('passport');

const googleStrategy = require('passport-google-oauth').OAuth2Strategy;

const crypto = require('crypto');

const User = require('../models/user');

passport.use(new googleStrategy({

    clientID : "198401405511-98ejltrc09bj1l1du1drm2b6jc052pgd.apps.googleusercontent.com" ,
    clientSecret : "85jZ2Ut7Ld_mKTaVMnC5xts7" ,
    callbackURL : "http://localhost:8000/users/auth/callback"

}, function(accessToken , refreshToken , profile , done){

   User.findOne({email : profile.emails[0].value}).exec(function(err , user){

     if(err){ console.log('error in google strategy-passport' , err); return ;}

     console.log(profile);

     if(user){
         return done(null , user);
     }
     else{

         User.create({
             name : profile.displayName ,
             email : profile.emails[0].value ,
             password : crypto.randomBytes(20).toString('hex')
            } , function(err , user){

                if(err){ console.log('error in creating google strategy-passport' , err); return ;}
                

                return done(null, user);

            });


     }

   });



}));

module.exports = passport ;