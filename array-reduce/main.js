const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((accum, num) => accum + num);
console.log('sum:', sum);

const product = numbers.reduce((accum, num) => accum * num);
console.log('product:', product);

const balance = account.reduce((accum, transaction) => {
  if (transaction.type === 'deposit') {
    return accum + transaction.amount;
  }
  return accum - transaction.amount;
}, 0);
console.log('balance:', balance);

const composite = traits.reduce((accum, trait) => {
  return Object.assign(accum, trait);
});
console.log('composite:', composite);
