module.exports.profile = function(req , res )
{
    return res.render('user.ejs', {title : "User"});

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

//todo later

};

module.exports.createSession  = function(req, res ){
   //to do later
};