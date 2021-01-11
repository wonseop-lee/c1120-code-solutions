const fs = require('fs');
const data = require('./data.json');

let command = process.argv[2];

switch (command) {
  case 'read':
    for (const entry in data.notes) {
      console.log(entry + ': ' + data.notes[entry]);
    };
    break;
  case 'create':
    let newEntry = process.argv[3];
    let newIndex = data.nextId;
    data.notes. = newEntry;
    data.nextId++;
    let dataJSON = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', dataJSON, 'utf8', (err) => {
      if (err) throw err;
    });
    break;
  case 'update':
    let selectedEntry = process.argv[3];
    let newMessage = process.argv[4];
    for (const entry in data.notes) {
      if (entry === selectedEntry) {
        data.notes[entry] = newMessage;
        console.log(data.notes[entry]);
      };
    };
    dataJSON = JSON.stringify(data, null, 2); // let
    fs.writeFile('data.json', dataJSON, 'utf8', (err) => {
      if (err) throw err;
    });
    break;
  case 'delete':
    // let selectedEntry = process.argv[3];

    break;
  default:
    console.log('Enter read, create, update, or delete command');
};
