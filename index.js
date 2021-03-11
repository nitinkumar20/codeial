const express = require('express');

const cookieParser = require('cookie-parser');

const app = express();

const port = 8000;

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());


const expressLayouts = require('express-ejs-layouts');

const db = require('./config/mongoose.js');


//used for session cookie
const session = require('express-session');

const passport = require('passport');

const passportLocal = require('./config/passport-local-strategy.js');

app.use(expressLayouts);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


//use express router
app.use(express.static('./assets'));



app.set('view engine', 'ejs');

app.set('views', './views');

app.use(session({

    name : 'Codeial' ,
    //change the secret before deploymemt
    secret : 'blahsomething',

    saveUninitialized : false ,
    resave : false ,
    cookie : {
        maxAge : (1000 * 60 * 100)
    }

}));

app.use(passport.initialize());

app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use('/', require('./routes'));

app.listen(port , function(err)
{
       if(err)
       {
           console.log(`Error in running the server ${err}`);
       }

       console.log(`Server is running in the port : ${port}`);

});