require('dotenv').config();

const express = require('express');
const bodyParser=require('body-parser')
const {Server}= require('socket.io')


const io = new Server();
const app = express();

app.use(bodyParser.json())
// const mongoose = require('mongoose');
// // Environment variables
// const PORT = process.env.PORT || 5000;
// const MONGO_URI = process.env.MONGO_URI;

// // MongoDB connection
// mongoose.connect(MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.error('MongoDB connection error:', err));

//   app.get('/', (req, res) => {
//     res.status(200).send("hello");
//   });
// // Start server

const emailToSocketMapping = new Map();

io.on("connection",(socket)=>{
  socket.on("join-room",(data)=>{
    const {roomId, emailId}=data;
    console.log("user",emailId,"Joined Room",roomId)
    emailToSocketMapping.set(emailId, socket.id)
    socket.join(roomId);
    socket.broadcast.to(roomId).emit("user-joined",{emailId});

  })
})
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
