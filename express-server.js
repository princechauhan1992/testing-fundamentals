const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/prince', (req, res) => {
  res.send('Hello prince!');
});

app.listen(3000);
