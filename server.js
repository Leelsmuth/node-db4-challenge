const express = require('express');

const recipieRouter = require('./recipes/recipes-router');

const server = express();

server.use(express.json());
server.use('/api/schemes', recipieRouter);

module.exports = server;