const io = require('socket.io');

const server = io();

server.on("connection", (socket) => {
  socket.on('send-chat-msg', (message) => {
    socket.broadcast.emit('chat-msg', message);
  });

  socket.on('send-is-typing', (userName) => {
    socket.broadcast.emit('is-typing', userName);
  });

  socket.on('send-stopped-typing', (userName) => {
    socket.broadcast.emit('stopped-typing', userName);
  });
});

server.listen(8000);
