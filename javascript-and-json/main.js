var arr = [{
  isbn: '123-4-56-789012-3',
  title: 'Book 1',
  author: 'Author One'
},
{
  isbn: '234-5-67-890123-4',
  title: 'Dook 2',
  author: 'Bauthor Two'
},
{
  isbn: '345-6-78-901234-5',
  title: 'Cook 3',
  author: 'Cauthor Three'
}];

console.log('books:', arr);
console.log('type of books:', typeof arr);

var arrJSON = JSON.stringify(arr);
console.log('arrJSON:', arrJSON);
console.log('type of arrJSON:', typeof arrJSON);

var str = '{"id": 123456, "name": "Json Doe"}'
console.log('string of JSON:', str);
console.log('type of string of JSON:', typeof str);

var strParsed = JSON.parse(str);
console.log('string of parse:', strParsed);
console.log('type of string of parsed:', typeof strParsed);
