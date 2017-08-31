$(function(){

	//initiate socket
	var socket = io();
	//variables
	var message = $('#chat-message');
	var chat = $('#chat');
	var nickname = $('#nickname');

	message.focus();
	$('#message-box').submit(function(e) {
		e.preventDefault();

		socket.emit('client-message', nickname.val() + ': ' + message.val());
		message.val('');
	});
	socket.on('client-message', function(data){
		chat.append(data + '<br/>');
	});
});
