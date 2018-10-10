const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

//lets handle custom error
app.use((req,res)=>{
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});
app.use((err, req, res, next)=>{
	console.log.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - Server Error');
});

app.listen(app.get('port'), ()=>{
	console.log('Express started at'+app.get('port'));
});
