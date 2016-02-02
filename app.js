var express = require('express'); 
var morgan = require('morgan'); 
var bodyParser = require('body-parser'); 
var swig = require('swig')


var app = express(); 

var port = 3000; 


// swig set up 

app.set('views', __dirname + '/views'); 
app.set('view engine', 'html'); 
app.engine('html', swig.renderFile); 


//logging and bodyparsing 

app.use(morgan('dev')); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false}))


// routing static files 


// 404 not found error 


app.use(require('./routes'));

// error handling 
app.use(function(err, req, res, next){
  res.status(err.status || 500); 
  // render some error html 
})

app.listen(port, function(){
  console.log('server is now listening for requests on port: ', port)
})
