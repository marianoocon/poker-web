const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  const rooms = ['room1', 'room2'];
  const random = Math.floor(Math.random() * rooms.length);

  socket.join(rooms[random]);
  console.log('connection', rooms[random])


  socket.on('showResults', () => {
    io.to(rooms[random]).emit('showResults');
  })

  // receive vote event and emit to all connected clients.
  socket.on('userVote', vote => {
    console.log('vote', vote) 
    io.to(rooms[random]).emit('userVote', vote);
  });
});

http.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
