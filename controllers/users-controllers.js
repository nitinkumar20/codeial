const { getMaxListeners } = require('../models/user.js');
const User = require('../models/user.js');

module.exports.profile = function(req , res )
{
    // console.log(req.cookie);

    if(req.cookies.user_id)
    {
        User.findById(req.cookies.user_id , function(err, user){

            if(err)
            {
                console.log("error in finding user", err);
                return ;
            }


            if(user)
            {
                return res.render('user_profile.ejs', {title : 'User Profile', user : user});
            }

            return res.redirect('/users/sign-in/');


        });

    }
    else
    return res.redirect('/users/sign-in/');

};

module.exports.signup = function(req, res){

    // return res.end('<h1>Express is up for codeial </h1>');

   return res.render('user_sign_up.ejs', {title : "Sign UP"});

};


module.exports.signin = function(req, res){

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

//    console.log(req.body);

//    console.log()
   
  User.findOne({ email : req.body.email} , function(err, user){

    if(err)
    {
        console.log("error ", err) ;
        return ;
    }

    // console.log(req.body);
    // console.log(user);

    if(user)
    {
 
       if(user.password != req.body.password)
       {   
           return res.redirect('back');
       }
        
      

       res.cookie('user_id',user.id);

       res.redirect('/users/profile/');


    }
    else
    {
           return res.redirect('back');
    }

  });


};


module.exports.signout = function(req , res)
{ 
    // console.log(req.cookies);
 
    // console.log(req.cookies);
    res.cookie('user_id','');
    return res.redirect('/users/sign-in');

};