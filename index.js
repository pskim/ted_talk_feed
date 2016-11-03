var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
})

app.get('/cssFolder/main.css', function(req, res) {
	res.sendFile(__dirname + '/cssFolder/main.css');
})

app.get('/src/App.js', function(req, res) {
	res.sendFile(__dirname + '/src/App.js');
})

app.get('/src/GoogleFeedAPI.js', function(req, res) {
	res.sendFile(__dirname + '/src/GoogleFeedAPI.js');
})

app.get('/src/Handlers.js', function(req, res) {
	res.sendFile(__dirname + '/src/Handlers.js');
})

app.get('/src/HandleBars.js', function(req, res) {
	res.sendFile(__dirname + '/src/HandleBars.js');
})

app.listen(port);