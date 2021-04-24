const Post = require('../models/post');

const Comment = require('../models/comments');

const Like = require('../models/like');

module.exports.toggleLike = async function(req , res){
   
    try 
    {
        let likeable ;
        let deleted = false ;

        if(req.query.type == 'Post')
        {
             likeable = await  Post.findById(req.query.id).populate('Likes');
        }
        else
        {
             likeable =  await Comment.findById(req.query.id).populate('Likes');
        }


        let existingLike = await Like.findOne({

            likeable : req.query.id ,
            onModel : req.query.type ,
            user : req.user._id
        });


        if(existingLike)
        {
            likeable.likes.pull(existingLike._id);
            likeable.save();
            existingLike.remove();
            deleted = true ;
        }
        else
        {
             let newLike = await Like.create({
               user : req.user._id ,
               likeable : req.query.id ,
               onModel :req.query.type
             });

             likeable.likes.push(like._id);
             likeable.save();
        }

        return res.json(200 , {
            message : 'REquest Successfull' ,
            data : {
                deleted : deleted
            }

        });

    }
    catch(err)
    {
         console.log(err);
         return res.json(500 , {
         message : 'Internal server error'
        });
    }


}