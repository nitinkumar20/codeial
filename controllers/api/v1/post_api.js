const Post = require('../../../models/post');

const Comment = require('../../../models/comments');


module.exports.index = async function(req, res){



    let posts = await Post.find({})
    .sort('-createdAt')
    .populate('user')
    .populate({
        path : 'comments' ,
        populate : {
        path : 'user' 
        }
    }); 

    return res.json(200, {

     message : " Inside version v1" ,
     posts : posts

    });
}


module.exports.destroy = async function(req , res)
{
         
    try{


        let post = await Post.findById(req.params.id);
   
         
          
            post.remove();

            await  Comment.deleteMany({post : req.params.id });



            return res.json(200 , {
                message : 'Post deleted !'

            });
            



    }
    catch(err){
       
        return res.json(500 , 
            {
              message : 'Internal server error !'
            });
    }
  


}