const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const data = require('./data.json');
  const arr = [];

  for (const entry in data.notes) {
    arr.push(data.notes[entry]);
  };
  res.status(200).send(arr);
});

app.get('/api/notes/:id', (req, res) => {
  const data = require('./data.json');
  const id = req.params.id;
  let found = false;

  if (id >= 1) {
    for (const entry in data.notes) {
      if (entry === id) {
        const resJSON = data.notes[entry];
        res.status(200).json(resJSON);
        found = true;
      };
    };
    if (!found) {
      const errorObj = {error: `cannot find note with id ${id}`};
      res.status(404).json(errorObj);
    };
  } else {
    const errorObj = {error: 'id must be a positive integer'};
    res.status(400).json(errorObj);
  };
});

app.post('/api/notes', (req, res) => {
  const data = require('./data.json');
  const inputObj = req.body;
  const errorObj = {error: 'content is a required field'};

  if (Object.keys(inputObj).length === 0 || inputObj.content === undefined) {
    res.status(400).json(errorObj);
  } else {
    let nextIdValue = data.nextId;

    data.notes[nextIdValue] = {id: '', content: ''};
    data.notes[nextIdValue].id = nextIdValue;
    data.notes[nextIdValue].content = inputObj.content;
    data.nextId++;

    let dataJSON = JSON.stringify(data, null, 2);

    const errFunc = (err) => {
      if (err) {
        errorObj.error = 'An unexpected error occurred.';
        res.status(500).json(errorObj);
     } else {
        res.status(201).json(data.notes[nextIdValue]);
      }
    };
    fs.writeFile('data.json', dataJSON, 'utf8', errFunc);
  };
});

app.delete('/api/notes/', (req, res) => {
  const errorObj = {error: 'id must be a postivie integer'};
  res.status(400).json(errorObj);
});

app.delete('/api/notes/:id', (req, res) => {
  const data = require('./data.json');
  const id = req.params.id;
  const errorObj = {};

  if (id >= 1) {
    let found = false;
    const keys = Object.keys(data.notes);
    const highestId = keys.pop();
    const nextHighId = keys.pop();

    for (const entry in data.notes) {
      if (entry === id) {
        found = true;
        delete data.notes[entry];

        if (highestId === id) {
          data.nextId = parseInt(nextHighId, 10) + 1;
        }
        let dataJSON = JSON.stringify(data, null, 2);

        const errFunc = (err) => {
          if (err) {
            errorObj.error = 'An unexpected error occurred.';
            res.status(500).json(errorObj);
          } else {
            res.sendStatus(204);
          };
        };
        fs.writeFile('data.json', dataJSON, 'utf8', errFunc);
      };
    };

    if (!found) {
      errorObj.error = `cannot find note with id ${id}`;
      res.status(404).json(errorObj);
    };
  } else {
    errorObj.error = 'id must be a positive integer';
    res.status(400).json(errorObj);
  };
});

app.put('/api/notes/', (req, res) => {
  const errorObj = {error: 'id must be a positive integer'};
  res.status(400).json(errorObj);
});

app.put('/api/notes/:id', (req, res) => {
  const data = require('./data.json');
  const id = req.params.id;
  const inputObj = req.body;
  const errorObj = {};
  let found = false;

  if (id < 1) {
    errorObj.error = 'id must be a positive integer';
    res.status(400).json(errorObj);
  } else if (inputObj.content === undefined){
    errorObj.error = 'content is a required field';
    res.status(400).json(errorObj);
  } else {
    for (const entry in data.notes) {
      if (entry === id) {
        found = true;
        data.notes[entry].content = inputObj.content;

        let dataJSON = JSON.stringify(data, null, 2);

        const errFunc = (err) => {
          if (err) {
            errorObj.error = 'An unexpected error occurred.';
            res.status(500).json(errorObj);
          } else {
            res.status(201).json(data.notes[entry]);
          }
        };
        fs.writeFile('data.json', dataJSON, 'utf8', errFunc);
      };
    };

    if (!found) {
      errorObj.content = `cannot find note with id ${id}`;
      res.status(404).json(errorObj);
    };
  };
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
