const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
});

const port = 2468;

app.listen(port, console.log(`Now listening on Port:${port}`));
