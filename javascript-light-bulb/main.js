var button = document.querySelector('.bulb');
var background = document.querySelector('.container');

button.addEventListener('click', function() {
  if (button.className === 'bulb unclicked') {
    button.className = 'bulb clicked';
    background.className = 'container dark';
  } else {
    button.className = 'bulb unclicked';
    background.className = 'container light';
  }
});
