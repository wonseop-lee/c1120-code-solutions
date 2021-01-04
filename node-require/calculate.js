const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

let num1 = process.argv[2];
let num2 = process.argv[4];

if (process.argv[3] === 'plus') {
  add.add(num1, num2);
};
if (process.argv[3] === 'minus') {
  subtract.subtract(num1, num2);
};
if (process.argv[3] === 'times') {
  multiply.multiply(num1, num2);
};
if (process.argv[3] === 'over') {
  divide.divide(num1, num2);
};
