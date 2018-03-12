const express = require('express');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');

  socket.on('createMessage', (newMessage) => {
    console.log('createMessage', newMessage);

    socket.emit('newMessage', newMessage);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected from server');
  });

});

server.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};