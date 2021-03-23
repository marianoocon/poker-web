const app = require('express')();
const http = require('http').Server(app);

const initDatabase = require('./db').initDatabase;
const getDatabase = require('./db').getDatabase;
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

initDatabase(() => {
  http.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
})

app.get('/', handleRoot);

function handleRoot(req, res) {
  const db = getDatabase();
  const collection = db.collection('rooms');
  collection.find({}).toArray((err, data) => {
    if (err) throw err;
    console.log(data);
    res.json(data);
  })
}

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