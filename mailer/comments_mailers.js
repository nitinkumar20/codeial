const nodeMailer = require('../config/nodemailer');




exports.newComment = (comment) =>{
//   console.log('Inside new comment mailer');
let htmlString = nodeMailer.renderTemplate({comment : comment }, '/comments/new_comment.ejs');


    nodeMailer.transporter.sendMail({
        from : 'nitin.20178036@mnnit.ac.in' ,
        to : comment.user.email ,
        subject : 'New comment added' ,
        html : htmlString
    } , (err , info) =>{
        
        if(err){
           console.log('error in sending mail', err);
           return ;
        }

        // console.log('Message sent', info);
        return ;
    });
    
}