const socketController = (socket) => {
    
    console.log(socket);

    console.log('Client connected',socket.id);

    socket.on('disconnect',()=>{
        console.log('Client disconnected',socket.id);
    });

    socket.on('send-message',(payload,cb)=>{
        const id = 123456;
        cb(id);
        socket.broadcast.emit('send-message',payload);
    });
}

module.exports = {
    socketController
}