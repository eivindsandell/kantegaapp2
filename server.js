var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
var request = require('request');


var port = 80;




app.use(express.static(path.join(__dirname, 'public')));
// Setter serveren til normal listening "/" er for valig request
app.get('/', function(req, res, next){
	fs.readFile('public/index.html', function(err, data){
		res.writeHead(200, {'Content-Type': 'text/html'}); //Sender deg til index.html
		res.end(data);
	});
});


app.post('/', function(req, res) {
 // Handle the post for this route
});

// Starter serveren
app.listen(port);
console.log("Server running")
console.log("Press CTRL+C to stop server")