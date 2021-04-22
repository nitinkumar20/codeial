const nodeMailer = require('../config/nodemailer');




exports.newComment = (comment) =>{
  console.log('Inside new comment mailer');

    nodeMailer.transporter.sendMail({
        from : 'codeial.com' ,
        to : comment.user.email ,
        subject : 'New comment added' ,
        html : '<h1>Hey ! new comment published </h1>'
    } , (err , info) =>{
        if(err){
           console.log('error in sending mail', err);
           return ;
        }

        console.log('Message sent', info);
        return ;
    });
    
}