var http = require('http');
var app = require('./config/express');
require('./config/database')('localhost/lesdrinks');

http.createServer(app).listen(3000, function(){
	console.log('Server started at port 3000');
});

