const Post = require('../models/post');

const User = require('../models/user');

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

    Post.find({})
    .populate('user')
    .populate({
        path : 'comments' ,
        populate : {
            path : 'user' 
        }
    })
    .exec(function(err , posts){

        User.find({} , function(err , users)
        {

            return res.render('home' , {
            title : 'Codeial | Home ' ,
            posts : posts ,
            all_users : users 
             
        });
     
       
    }); 


    });


};


