const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const router = require('./router');
const { disconnect } = require('process');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection',(socket) => {
    console.log('new conncetion occurred!!!');

    socket.on('disconnect', () => {
        console.log('someone left!!!');
    })
});

app.use(router);

server.listen(PORT, () => console.log('server has started on port ${PORT}'));
