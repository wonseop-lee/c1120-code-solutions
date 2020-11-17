/* eslint-disable no-console, no-unused-vars, dot-notation */
var student = {
  firstName: 'Wonseop',
  lastName: 'Lee',
  age: 30
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ' + fullName);

student.livesInIrvine = true;
student.previousOccupation = 'esports operation';
console.log('value of student.livesInIrvine: ' + student.livesInIrvine);
console.log('value of student.previousOccupation: ' + student.previousOccupation);
console.log('value of student:');
console.log(student);

var vehicle = {
  make: 'BMW',
  model: 'M3',
  year: 1991
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;
console.log("value of vehicle['color']: " + vehicle['color']);
console.log("value of vehicle['isConvertible']: " + vehicle['isConvertible']);
console.log('value of vehicle:');
console.log(vehicle);

var pet = {
  name: '',
  type: '',
};

delete pet.name;
delete pet.type;
console.log('value of pet:');
console.log(pet);
