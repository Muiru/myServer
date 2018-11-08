var mongoose = require ('mongoose');
var dbURI = 'mongodb://localhost:/MongoosePM'//,{useNewUrlParser=true};
mongoose.connect(dbURI,{useNewUrlParser:true});

mongoose.connection.on('connected', function () {
console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function (e) {
console.log('Mongoose disconnected:- ' +e);
});
process.on('SIGINT', function() {
mongoose.connection.close(function () {
console.log('Mongoose disconnected through app termination');
process.exit(0);
});
});
	process.on('SIGINT',function() {
	mong.connection.close(function(){

		console.log('Mongoose disconnected through app termination');
	process.exit(0);
});
});
