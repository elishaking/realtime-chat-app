const io = require('socket.io');

const server = io();

server.onconnection((socket) => {
  socket.emit('chat-msg', "Hello");

  let i = 0;
  setInterval(() => {
    socket.emit('count', `count: ${i++}`);
  }, 3000);
});

server.listen(8000);
