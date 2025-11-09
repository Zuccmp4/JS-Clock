const express = require('express');
const app = express();

let refresh = 0;

app.get('/', (req, res) => {
    console.log("You've refreshed " + (refresh++ + 1) + ' times.');
    res.send("Welcome to my Analog Clock App!");
});

app.listen(3030);