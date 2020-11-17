/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var initial = person.firstName[0] + person.lastName[0];
  return initial;
}
