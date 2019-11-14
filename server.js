const io = require('socket.io');

const server = io();

server.on("connection", (socket) => {
  socket.on('send-chat-msg', (message) => {
    socket.broadcast.emit('chat-msg', message);
  })
});

server.listen(8000);
