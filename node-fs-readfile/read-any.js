const fs = require('fs');

let fname = process.argv[2];

fs.readFile(fname, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
