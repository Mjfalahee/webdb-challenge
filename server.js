const express = require('express');

//add router
const projectsRouter = require('./data/routers/projectsRouter');
const actionsRouter = require('./data/routers/actionsRouter');

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.send(`<h1> Server is running! </h1>`);
});

//server.use router
server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);


module.exports = server;