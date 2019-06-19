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

let usersTyping = [];

io.use((socket, next) => {
    socket.emit('init', {
        username: socket.handshake.query.username,
        usersTyping
    })
    console.log('emited handshake')
    return next();
})

io.on('connection', (socket) => {

    const user = socket.handshake.query.username;
       
    console.log(`${user} has connected`);
    socket.broadcast.emit('information message', `${user} has connected`)
    
    socket.on('disconnect', () => {
        console.log(`${user} has disconnected`)
        socket.broadcast.emit('information message', `${user} has disconnected`)
    });

    socket.on('chat message', msg => {
        console.log(msg)
        socket.broadcast.emit('chat message', msg)
    })

    socket.on('user typing', () => {
        console.log(`${user} is typing`)
        usersTyping = [...usersTyping, user];
        socket.broadcast.emit('user typing', user)
    })

    socket.on('user not typing', () => {
        console.log(`${user} is not typing anymore`)
        usersTyping = usersTyping.filter(val => val !== user);
        socket.broadcast.emit('user not typing', user)
    })
})

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})