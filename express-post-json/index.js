const express = require('express');
const app = express();

let nextId = 1;
const arr = [];

app.get('/api/grades', function(req, res) {
  res.json(arr);
});

app.use(express.json());

app.post('/api/grades', function(req, res) {
  res.status(201);
  let grades = req.body;
  grades.id = nextId;
  nextId++;
  arr.push(grades);
  res.json(grades);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
