/* exported getValue */

// function getValue(object, key) {
//   const obj = Object.entries(object);
//   for (const i of obj) {
//     if (i[0] === key) {
//       console.log(i[1]);
//       return i[1];
//     }
//   }
// }

function getValue(object, key) {
  for (const i in object) {
    if (i === key) {
      return object[i];
    }
  }
}
