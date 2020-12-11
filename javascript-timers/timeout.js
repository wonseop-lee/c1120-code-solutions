var $h1 = document.querySelector('h1');

function h1Change() {
  $h1.textContent = 'Hello There';
};

setTimeout(h1Change, 2000);
