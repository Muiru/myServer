const fortune = require('./lib/fortune.js');
 const express = require('express');
 
 	const app = express();
 	
 	const handlebars = require('express-handlebars').create({defaultLayout:'main'});
	app.use(express.static(__dirname + '/public'));
 	app.engine('handlebars', handlebars.engine);
 	app.set('view engine', 'handlebars');
 	
 	app.set('port', process.env.PORT || 3000);
 	
 	app.get('/', (req,res)=>{
 		//res.type('text/plain');
 		//res.send('Meadwlark Travel');
		res.render('home');
 	});
 	
 	app.get('/about',(req, res)=>{
 		//res.type('text/plain');
 		//res.send('About Meadowlark Travel');
		//var randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)];
		res.render('about',{fortune:getFortune()});

	/*var fortunes = [
		"Conquer your feers or they will conquer you.",
		"Rivers need springs.",
		"Do not fear what you don't know.",
		"You will have a pleasant surprise.",
		"Whenever possible, keep it simple.",
			];*/
 	
 	//custom 404 page
 	app.use((req,res)=>{
 		res.type('text/plain');
 		res.status(404);
 		res.send('404 - Not Found');
 	});
 	
 	//custom 500 page
 	app.use((err, req,res,next)=>{
 		console.error(err.stack);
 		res.type("text/plain");
 		res.status(500);
 		res.send('500 - Server Error');
 	});
 	
 	//create and listen
 	
 	app.listen(app.get('port'), ()=>{
 		console.log('Express started on http://localhost:'+app.get('port')+';press Ctrl-C to terminate.');
 	}); 
