/* exported getStudentNames */

function getStudentNames(students) {
  var arr = [];
  for (var i = 0; i < students.length; i++) {
    arr[i] = students[i].name;
  }
  return arr;
}
