const express = require('express');

const cookieParser = require('cookie-parser');

const app = express();

const port = 8000;

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());


const expressLayouts = require('express-ejs-layouts');

const db = require('./config/mongoose.js');

app.use(expressLayouts);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


//use express router
app.use(express.static('./assets'));

app.use('/', require('./routes/index.js'));

app.set('view engine', 'ejs');

app.set('views', './views');





app.listen(port , function(err)
{
       if(err)
       {
           console.log(`Error in running the server ${err}`);
       }

       console.log(`Server is running in the port : ${port}`);

});