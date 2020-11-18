var numOne = 3;
var numTwo = 5;
var numThree = 10;
var maximumValue = Math.max(numOne, numTwo, numThree);
console.log('max value: ' + maximumValue);

heroes = ['Iron Man', 'Spider Man', 'Thor', 'Dr. Strange'];
var randomNumber = Math.random();
randomNumber *= heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('random index: ' + randomIndex);

var randomHero = heroes[randomIndex];
console.log('random hero: ' + randomHero);
//array
var library = [
  {title: 'Harry Potter', author: 'The lady'},
  {title: 'Hobbit', author: 'The man'},
  {title: 'JavaScript Guide', author: 'The alien'}
];
var lastBook = library.pop();
console.log('last book is: ', lastBook);
var firstBook = library.shift();
console.log('first book is: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library array:', library);

var fullName = 'Wonseop Lee';
var firstAndLastName = fullName.split(' ')
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
