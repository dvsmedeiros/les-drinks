var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon')
var path = require('path')

app.set('secret', 'secret');

app.use(favicon(path.join('', 'public', '/images/favicon.ico')));
app.use(express.static('./public'));
app.use(bodyParser.json());

consign({cwd: 'app'})
	.include('models')
	.then('api')
	.then('routes/auth.js')
	.then('routes')
	.into(app); 

module.exports = app;