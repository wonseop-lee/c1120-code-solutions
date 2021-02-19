/* exported compact */

function compact(array) {
  const newArr = [];
  for (const val of array) {
    if (val) {
      newArr.push(val);
    }
  }
  return newArr;
}
