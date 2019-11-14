const io = require('socket.io');

const server = io();

server.on("connection", (socket) => {
  socket.on('chat-msg', (message) => {
    console.log(message);
  })
});

server.listen(8000);
