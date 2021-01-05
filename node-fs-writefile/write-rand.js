const fs = require('fs');

fs.writeFile('random.txt', Math.random(), 'utf8', (err) => {
  if (err) throw err;
});
