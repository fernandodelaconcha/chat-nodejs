//requirements
const http = require('http');
const express = require('express');
const app = express();
const morgan = require('morgan');

//server config
const server = http.createServer(app);
app.use(morgan('dev'));
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

//server initialization
server.listen(app.get('port'), function(){
	console.log("server is working");
});

//sockets logic down here
require('./sockets')(server);
