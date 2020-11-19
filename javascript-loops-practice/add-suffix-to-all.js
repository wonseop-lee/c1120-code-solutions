/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  var arr = [];
  for (var i = 0; i < words.length; i++) {
    arr[i] = words[i] + suffix;
  }
  return arr;
}
