const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codeial_development', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection ;

db.on('error', console.error.bind(console,"error in connecting to database.."));

db.once('open', function (){
console.log("Connected to database :: MongoDb");
});

module.exports = db;



