/* exported student */

var student = {
  firstName: 'Wonseop',
  lastName: 'Lee',
  subject: 'JavaScript',
  getFullName: function() {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function() {
    let str = 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
    return str;
  }
}
