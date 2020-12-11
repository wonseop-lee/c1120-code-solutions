var $h1 = document.querySelector('h1');
var counter = 4;
var str = '~Earth BeeeelooowwwUs~';
var intervalID = null;

function countDown() {
  counter--;
  if (counter > 0) {
    $h1.textContent = counter;
  } else {
    $h1. textContent = str;
    clearInterval(intervalID);
  }
}

intervalID = setInterval(countDown, 1000);
