require('dotenv').config()
const express = require('express');
const morgan =require('morgan');
const bodyParser = require('body-parser');
//const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const app = express();

const moviesRouter =require('./routes/movies')
app.get('/', function(req, res){
    res.send('it works');
})
   
/*app.get('/movies', function(req, res){
    res.send('it is movies comments');
})*/

app.get('/movies', function(req, res){
    res.send('it is movies comments');
})

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))
app.use('/', moviesRouter);
app.use(bodyParser.json());

app.use((req,res,next) =>{
    const error =new Error('not found');
    error.status = 404;
    next(error);
})

app.listen(process.env.PORT, function(){
    console.log('server running:' +process.env.PORT);
})
