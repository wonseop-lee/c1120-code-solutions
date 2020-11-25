var $modal = document.querySelector('.modal');
var $openButton = document.querySelector('.open-button');
var $noButton = document.querySelector('.no-button');

$openButton.addEventListener('click', function() {
  $modal.className = 'modal shown';
});

$noButton.addEventListener('click', function() {
  $modal.className = 'modal hidden';
});
