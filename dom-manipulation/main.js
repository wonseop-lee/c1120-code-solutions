var numOfClicks = 0;

var hotButton = document.querySelector('.hot-button');

var clickCount = document.querySelector('.click-count');

hotButton.addEventListener('click', function(){
  numOfClicks++;
  clickCount.textContent = 'Clicks: ' + numOfClicks;
  if (numOfClicks >= 4) {
    hotButton.className = 'hot-button cool';
  }
  if (numOfClicks >= 7) {
    hotButton.className = 'hot-button tepid';
  }
  if (numOfClicks >= 10) {
    hotButton.className = 'hot-button warm';
  }
  if (numOfClicks >= 13) {
    hotButton.className = 'hot-button hot';
  }
  if (numOfClicks >= 16) {
    hotButton.className = 'hot-button nuclear';
  }
});
