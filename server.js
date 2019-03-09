const express = require('express');
const server = express();

server.use(express.json());

const projectsRoutes = require('./projects/projectRoutes');
const actionRoutes = require('./actions/actionRoutes');


server.get('/', (req, res) => {
    res.status(200).json('Home Page up and running')
});

server.use('/api/projects/', projectsRoutes);
server.use('/api/actions/', actionRoutes);


module.exports = server;