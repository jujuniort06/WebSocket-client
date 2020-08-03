const net = require('net');

const port = 4321

const server = new net.Socket();

server.connect(port, '192.168.0.16', () => {  
  server.write('Client connected');
})

server.on('data', (socket) => {
  console.log('Recebeu os dados: ' + socket);
})