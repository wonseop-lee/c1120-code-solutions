const express = require('express');
const app = express();

app.use(function (req, res) {
<<<<<<< HEAD
=======
  console.log(req.method); // delete before commit
>>>>>>> 43a723004874d3977e98fc7aefc5a7901a090eaa
  res.send('Hello World!')
});

app.listen(3000, ()=> {
  console.log('Listening on port 3000!');
});
