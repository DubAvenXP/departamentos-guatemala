require('dotenv').config();
const Server = require('./api/Server');
const server = new Server();

server.listen();