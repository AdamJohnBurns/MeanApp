process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var port = process.env.PORT || 3000;
var ip = process.env.IP || '127.0.0.1';

var mongoose = require('./config/mongoose'),
	express = require('./config/express'),
	passport = require('./config/express');

var db = mongoose();
var app = express();
var passport = passport();

app.listen(port, ip);
module.exports = app;

console.log('Server running on ' + ip + ':' + port);
console.log('process.env.NODE_ENV = ' + process.env.NODE_ENV);