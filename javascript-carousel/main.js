// var $imgContainer = document.querySelector('.img-container');
// var $dotContainer = document.querySelector('.dot-container');
var $dots = document.querySelectorAll('.dot-container span');
var $left = document.querySelector('.left');
var $right = document.querySelector('.right');
var $img = document.querySelector('img');
var localImages = [
  '001', '004', '007', '025', '039'
];
var timerId = null;
var index = 0;

function setImage(index) {
  $img.setAttribute('src', 'images/' + index + '.png');
};

function setDotRegular(index) {
  for (let i = 0; i < $dots.length; i++) {
    $dots[i].setAttribute('class', 'fas fa-circle');
  }
  $dots[index].setAttribute('class', 'far fa-circle');
};

function nextPage() {
  stopUpdate();
  index++;
  if (index > 4) {
    index = 0;
  };
  setImage(localImages[index]);
  setDotRegular(index);
  timerId = setInterval(nextPage, 3000);
};

function previousPage() {
  stopUpdate();
  index--;
  if (index < 0 ) {
    index = 4;
  }
  setImage(localImages[index]);
  setDotRegular(index);
  timerId = setInterval(nextPage, 3000);
}

function stopUpdate() {
  clearInterval(timerId);
};

$left.addEventListener('click', function(e){
  previousPage();
});

$right.addEventListener('click', function(e){
  nextPage();
});

timerId = setInterval(nextPage, 3000);
