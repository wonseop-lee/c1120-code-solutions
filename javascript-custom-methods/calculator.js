/* exported calculator */

var calculator = {
  add: function (x, y){
    return x + y;
  },

  subtract: function (x, y){
    return x - y;
  },

  multiply: function (x, y){
    return x * y;
  },

  divide: function (x, y){
    return x / y;
  },

  square: function (x){
    return x * x;
  },

  sumAll: function (numbers){
    let sum = 0;
    for (var i = 0; i < numbers.length; i++){
      sum += numbers[i];
    }
    return sum;
  },

  getAverage: function (numbers){
    let avg = 0;
    let sum = 0;
    for (var i = 0; i < numbers.length; i++){
      sum += numbers[i];
    }
    avg = sum / numbers.length;
    return avg;
  }
};
