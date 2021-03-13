const Post = require('../models/post');

module.exports.home = function(req, res){

    // return res.end('<h1>Express is up for codeial </h1>');

    // console.log(req.cookies);

    // res.cookie('user-id', 20);

    // Post.find({} , function(err , posts){
    //     return res.render('home' , {
    //        title : 'Codeial | Home ' ,
    //        posts : posts 
    //     }); 
    // });

    //populating the user of posts

    Post.find({}).populate('user').exec(function(err , posts){
     
           return res.render('home' , {
           title : 'Codeial | Home ' ,
           posts : posts 
        } ); 


    } );


};


