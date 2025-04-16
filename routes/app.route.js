const express = require('express');
const Router = express.Router();

Router.get('/', (req, res) => {
    res.send('Hello');
})

Router.get('/json', (req, res) => {
    res.json({
        name: "Alfin",
        class: 2024,
    })
})

module.exports = Router;