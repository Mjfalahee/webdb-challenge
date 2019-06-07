const express = require('express');

//add router
const apiRouter = require('./data/routers/apiRouter');

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.send(`<h1> Server is running! </h1>`);
});

//server.use router
server.use('/api/', apiRouter);


module.exports = server;