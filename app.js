const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();
var aboutUs = require('./lib/homeInfor.js');
var tours = require ('./lib/tours.js');

//Setting static files directory direction
app.use(logger('dev'));
var publicPath = path.resolve(__dirname,"public");
//app.use('/',express.static( 'public'));
app.use(express.static(publicPath));
//lets use a templating engine-handlebars
const handlebars = require("express-handlebars").create({defaultLayout:'kulanasi'
});

app.set('port', process.env.PORT || 3000);

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//Routes
app.get('/',function(req,res){
	res.render('home',{about:aboutUs.abouts(),
	tours:tours.ttours()});
});

app.get('/home',(req,res)=>{
	res.render('home', {tours:tours.ttours(),
	about:aboutUs.abouts()});
});

app.get('/snacks',(req,res)=>{
	res.render('snacks');
});

app.get('/drinks',(req,res)=>{
	res.render('drinks');
});

app.get('/hFoods',(req,res)=>{
	res.render('hFoods');
});

app.get('/desert',(req, res)=>{
	res.render('desert');
});

app.get('/mainDIshes', (req, res)=>{
	res.render('mainDIshes');
});
//lets handle custom error

app.use((req,res)=>{
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), ()=>{
	console.log('Express started at: ' + app.get('port'));
});
