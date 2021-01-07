const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', function(req, res) {
  const arr = [];
  for (const grade in grades)  {
    arr.push(grades[grade]);
  };
  res.json(arr);
});

app.use(express.json());

app.post('/api/grades', function(req, res) {
  res.status(201);
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  nextId++;
  res.json(grades);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
