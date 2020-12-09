function ExampleConstructor() {
}

console.log('prototype of ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof prototype of ExampleConstructor:', typeof ExampleConstructor.prototype);

var newConstructor = new ExampleConstructor();
console.log('newConstructor:', newConstructor);

var isInstanceOf = newConstructor instanceof ExampleConstructor;
console.log('newConstructor isInstanceOf ExampleConstructor:', isInstanceOf);
