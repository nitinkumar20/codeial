const User = require('../models/user.js');

module.exports.profile = function(req , res )
{
    User.findById(req.params.id , function(err ,user){
     
        return res.render('user_profile.ejs', {
            
            title : "User" ,
            profile_user : user
        
        });
    });
    

};


module.exports.update = function(req, res){

  if(req.user.id == req.params.id)
  {
      User.findByIdAndUpdate(req.user.id , req.body , function(err , user){
          req.flash('success', 'Updated!');
          return res.redirect('back');
      });
  }
  else
  {   
      req.flash('error', 'Unauthorized!');
      return res.status(401).send('Unautherised');
  }

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
        return res.redirect('/users/profile');
     }
    // return res.end('<h1>Express is up for codeial </h1>');

    return res.render('user_sign_in.ejs', {title : "Sign In "});

};

module.exports.create = function(req, res){

     
        //   console.log(req.body);
        if(req.body.password != req.body.confirm_password)
       {
           req.flash('error', 'Passwords do not match');
           return res.redirect('back');
       }



       if(User.findOne({email : req.body.email }, function(err,user){

        if(err)
        {
            req.flash('error', err); 
            return res.redirect('back');
        }
    
    
    
        if(!user)
        {
            User.create(req.body , function(err, user){
    
              
        if(err)
        {
            req.flash('error', err); 
            return res.redirect('back');
        }
    
        req.flash('success', 'You have signed up, login to continue!');
        return res.redirect('/users/sign-in');
    
            });
        }
    
        else
        {
          
            req.flash('success', 'You have already signed up, login to continue!');
            return res.redirect('/users/sign-in');
        }
    
    }));

};

module.exports.createSession  = function(req, res ){
    req.flash('success', 'Logged in successfully');
   return res.redirect('/');
};


module.exports.destroySession  = function(req, res ){
    req.logout();
    req.flash('success', 'Logged out successfully');
    return res.redirect('/users/sign-in');
 };