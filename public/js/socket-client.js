const socket = io();

// HTML REFERENCES
const lblOnline = document.getElementById('lbl-online');
const lblOffline = document.getElementById('lbl-offline');

const inputMessage = document.getElementById('inputMessage');
const sendMessage = document.getElementById('sendMessage');

sendMessage.addEventListener('click', () => {
    const message = inputMessage.value;

    const payload = {
        id: 123,
        date: new Date().toISOString(),
        name: 'Jose Luis'
    }

    socket.emit('send-message', payload,id=>{
        console.log('Desde el server',id);
    });
});

socket.on('connect', () => {
    console.log('connected');
    lblOffline.classList.add('d-none');
    lblOnline.classList.remove('d-none');
});

socket.on('disconnect', () => {
    lblOnline.classList.add('d-none');
    lblOffline.classList.remove('d-none')
    console.log('disconnected');
});



socket.on('send-message', (payload) => {
    console.log('Soy el server', payload);
});