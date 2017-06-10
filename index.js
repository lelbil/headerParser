var express = require('express');
var requestIp = require('request-ip');

var app = express();

app.get('/', function(req, res) {
	var 	headers = req.headers,
		lang = req.headers['accept-language'].slice(0, 5),
		computer = req.headers['user-agent'].match(/\(([^)]+)\)/)[1],
		ip = requestIp.getClientIp(req);
	var ret = {
		"language" : lang, 
		"computer" : computer, 
		"ip" : ip
	};
	res.json(ret);
});

app.listen(process.env.PORT || 8080);
console.log("App running..");
