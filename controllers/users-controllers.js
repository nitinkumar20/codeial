const User = require('../models/user.js');

module.exports.profile = function(req , res )
{
    return res.render('user_profile.ejs', {title : "User"});

};

module.exports.signup = function(req, res){

    // return res.end('<h1>Express is up for codeial </h1>');

    if(req.isAuthenticated()){
       return  res.redirect('/users/profile');
    }

   return res.render('user_sign_up.ejs', {title : "Sign UP"});

};


module.exports.signin = function(req, res){


    if(req.isAuthenticated()){
        return  res.redirect('/users/profile');
     }
    // return res.end('<h1>Express is up for codeial </h1>');

   return res.render('user_sign_in.ejs', {title : "Sign In "});

};

module.exports.create = function(req, res){

     
        //   console.log(req.body);
        if(req.body.password != req.body.confirm_password)
       {
           return res.redirect('back');
       }



       if(User.findOne({email : req.body.email }, function(err,user){

        if(err)
        {
            console.log("Error in finding the user", err);
            return ;
        }
    
    
    
        if(!user)
        {
            User.create(req.body , function(err, user){
    
              
        if(err)
        {
            console.log("Error in creating  the user", err);
            return ;
        }
    
    
        return res.redirect('/users/sign-in');
    
            });
        }
    
        else
        {
          return res.redirect('back');
        }
    
    }));

};

module.exports.createSession  = function(req, res ){
   return res.redirect('/users/profile');
};


module.exports.destroySession  = function(req, res ){
    req.logout();
    return res.redirect('/users/sign-in');
 };