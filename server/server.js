const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newEmail', {
    from: 'geert@example.com',
    text: 'Hey man!',
    createdAt: 123432534325098125091934091237
  });

  socket.emit('newMsg', {
    from: 'karolien@example.com',
    text: 'Hey broertje!',
    createdAt: 1234
  });

  socket.on('createMsg', (msg) => {
    console.log('Create new msg:', msg);
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is now running on PORT ${port}`);
});