const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');
const router = require('./router');
const app = express();
const server = http.createServer(app);
const io = socketio(server);
app.use(express.json());
app.use(cors());
app.use(router);
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID='1037416732496-s63mlvhg3pbb5dnnsmfegnluip12tmj4.apps.googleusercontent.com';

app.post('/googlelogin',async (req,res)=>{
  const client = new OAuth2Client(CLIENT_ID);
  
  let payload;
  async function verify() {
    const ticket = await client.verifyIdToken({
        idToken: req.body.token,
        audience: CLIENT_ID
    });
     payload = ticket.getPayload();
    return (payload.email_verified);
  }
  let emailV=await verify().catch(console.error);

if(emailV){
  console.log(emailV);
  res.send({reply:emailV});
}
})

io.on('connect', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });
    if(error) return callback(error);
    socket.join(user.room);
    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit('message', { user: user.name, text: message });
    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);
    if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })
});

server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));
