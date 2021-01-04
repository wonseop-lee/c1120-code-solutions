let count = 3;

let timeoutID = setInterval(() => {
  console.log(count);
  count--;
  if (count === 0){
    console.log('Blast Off!');
    clearInterval(timeoutID);
  }
}, 1000);
