const path = require('path')
const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT || 8000

const app = express();
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.use(express.static(path.join(__dirname, "client", "build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected')
    });
    socket.on('chat message', msg => {
        console.log(msg)
        io.emit('chat message', msg)
    })
})

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})