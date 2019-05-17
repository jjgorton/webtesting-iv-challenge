const express = require('express');

const crewRouter = require('./crew/crew-router');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
	res.status(200).send(`
        <h1>Star Trek: The Next Generation - API</h1>
    `);
});

server.use('/api/crew', crewRouter);

module.exports = server;
