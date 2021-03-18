const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static('C:/Users/akank/Desktop/Movies/cool/chat-app-master/client/node_modules'));
app.use(router);

io.on('connect', (socket) => {
  console.log('CLient connected');
  socket.on('join',(data) => {
    console.log(data);
    socket.emit('messages','Hello from server');

  });

});

server.listen(4200, () => console.log(`Server has started.`));