const express = require('express');
const path = require('path');

const app = express();

const joinedPath = path.join(__dirname, 'public');

const staticFunc = express.static(joinedPath);

app.use(staticFunc);

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
