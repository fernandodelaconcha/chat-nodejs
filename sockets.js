
const io = require('socket.io');

module.exports = function(server){

  var sockets = io.listen(server);

  sockets.on('connection', function (socket){
  	console.log('new client');

  	socket.on('client-message', function (data){
  		sockets.emit('client-message', data);
  	});
  });
}
