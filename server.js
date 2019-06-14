const path = require('path')
const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT || 8000

const app = express();
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.use(express.static(path.join(__dirname, "client", "build")))

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('diconnect', () => {
        console.log('user disconnected')
    })
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})