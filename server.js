const express = require('express');
const server = express();

server.use(express.json());

const projectsRoutes = require('./projects/projectsRoute.js');
// const actionsRoutes = require('./actions/actionsRoutes');


server.get('/', (req, res) => {
    res.status(200).json('Home Page up and running')
});

server.use('/api/projects/', projectsRoutes);
// server.use('/api/actions/', actionsRoutes);


module.exports = server;