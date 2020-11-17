function convertaMinutesToSeconds(minutes) {
  var inSeconds = minutes * 60;
  return inSeconds;
};

console.log('expected output is 300: ' + convertaMinutesToSeconds(5));

function greet(name) {
  var greeted = 'Hey, ' + name;
  return greeted;
}

console.log('expected output is "Hey, John": ' + greet('John'));

function getArea(width, height) {
  var area = width * height;
  return area;
}

console.log('expected output is 714: ' + getArea(17, 42));

function getFirstName(person) {
  var name = person.firstName;
  return name;
}

console.log('expected output is Lelouche: ' + getFirstName({firstName: 'Lelouche', lastName: 'Lamperouge'}));

function getLastName(array) {
  var name = array[array.length - 1];
  return name;
}

console.log('expected output is accessories: ' + getLastName(['propane', 'and', 'propane', 'accessories']));
