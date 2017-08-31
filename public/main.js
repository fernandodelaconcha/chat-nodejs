$(function(){

	//initiate socket
	var socket = io();
	//variables
	var message = $('#chat-message');
	var chat = $('#chat');
	var frame = $('.frame');
	var nickname;


	//nickname submit
	$('#nickname-form').submit(function(e) {
		e.preventDefault();
		$('#nickname-form').css('opacity', 0);
		$('.container').css('opacity', 1);
		nickname = $('#nickname').val();
		message.focus();
	});

	//submit the message and it appears for all online users
	$('#message-box').submit(function(e) {
		e.preventDefault();
		socket.emit('client-message', nickname + ': ' + message.val());
		message.val('');
	});
	socket.on('client-message', function(data){
	var nick = data.substring(0,data.indexOf(':'));
		if (nick == nickname){
				chat.append('<li class="message">' + data + '</li>');
		} else {
			chat.append('<li class="own-message">' + data + '</li>');
		}
		frame.scrollTop(frame.prop("scrollHeight"));
	});
});
