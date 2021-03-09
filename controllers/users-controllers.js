module.exports.profile = function(req , res )
{
    return res.render('user.ejs', {title : "User"});

}