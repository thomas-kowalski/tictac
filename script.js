



// const input = document.getElementById('input');
// const startButton = document.getElementById('start');
// const stopButton = document.getElementById('stop');
// const timeLeftDisplay = document.getElementById('time-left');
// let countdown;

// function timer(seconds) {
//   clearInterval(countdown);

//   const now = Date.now();
//   const then = now + seconds * 1000;

//   displayTimeLeft(seconds);

//   countdown = setInterval(() => {
//     const secondsLeft = Math.round((then - Date.now()) / 1000);

//     if (secondsLeft < 0) {
//       clearInterval(countdown);
//       return;
//     }

//     displayTimeLeft(secondsLeft);
//   }, 1000);
// }

// function displayTimeLeft(seconds) {
//   const minutes = Math.floor(seconds / 60);
//   const remainderSeconds = seconds % 60;
//   const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
//   document.title = display;
//   timeLeftDisplay.textContent = display;
// }

// startButton.addEventListener('click', () => {
//   const seconds = input.value;
//   timer(seconds);
// });

// stopButton.addEventListener('click', () => {
//   clearInterval(countdown);
//   document.title = 'Custom Timer';
//   timeLeftDisplay.textContent = '';
// });
