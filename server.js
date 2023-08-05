const io = require('socket.io')(3000, {
    cors: {origin: "*", methods:["GET","POST"]}
})

io.on('connection', socket => {
    // console.log('new user')   // to check if the user is connected or not
    // socket.emit('chat-message', 'hello world')
        socket.on('send-chat-message', message => {
        // console.log(message)
        socket.broadcast.emit('chat-message', message)
    })
})