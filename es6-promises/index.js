const takeAChance = require('./take-a-chance');
const name = 'Wonseop';

const returnedPromise = takeAChance(name);

returnedPromise.then((value) => {
  console.log(value);
});
returnedPromise.catch((error) => {
  console.log(error.message);
});
