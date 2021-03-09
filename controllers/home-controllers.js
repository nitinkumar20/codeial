

module.exports.home = function(req, res){

    // return res.end('<h1>Express is up for codeial </h1>');

    console.log(req.cookies);

    res.cookie('user-id', 20);

    return res.render('home.ejs', {title : "Home"});

};


