'use strict';
let score = 0;
let job = prompt('am i doctor?').toLowerCase();
if (job === 'yes' || job === 'y') {
  alert('no way!');
} else if (job === 'no' || job === 'n') {
  alert('good one');
  score++;
  console.log('correct answer');
}
let gender = prompt('am i male?').toLowerCase();
if (gender === 'yes' || gender === 'y') {
  alert('what!!!');
} else if (gender === 'no'||gender ==='n') {
  alert('correct');
  score++;
  console.log('correct answer');
}
let place = prompt('do i live in space?').toLowerCase();
if (place === 'yes'||place === 'y') {
  alert('hi alien');
} else if (place === 'no'||place === 'n') {
  alert('of course');
  score++;
  console.log('correct answer');
}
let age = prompt('am i grand mother?').toLowerCase();
if (age === 'yes'||age === 'y') {
  alert('really!!!');
} else if (age === 'no'|| age === 'n') {
  alert('that\'s right');
  score++;
  console.log('correct answer');
}
let point = prompt('Do i will git 10 points?').toLowerCase();
if (point=== 'yes'|| point=== 'y') {
  alert('Yappy!');
  score++;
  console.log('correct answer');
} else if (point === 'no'|| point === 'n') {
  alert('whyyyy!');
}

let chances = 4;
let userInput = prompt('can you guess my age?');
while (chances) {
  if (userInput === '23') {
    alert("that's right");
    break;
  } else if (userInput <= 22) {
    alert('too low');
  } else {
    alert('too high');
  }
  if (chances === 1) {
    alert('this is the right answer 23');
    break;
  }

  chances -= 1;
  userInput = prompt('please try a gain you have ' + chances + 'remaining');
}

let moviesList = [
  'soul',
  'mulan',
  'sea',
  'the act',
  'my spy',
  'us',
  'ode to joy',
  'unplanned',
  'the hustle',
  'the upside',
];

let attempts = 6;
let userGuess = prompt('try to guess the movie');
while (attempts) {
  let correct = false;
  for (let i = 0; i < moviesList.length; i++) {
    if (userGuess === moviesList[i]) {
      score++;
      correct = true;
      alert('this is the right answer');
      break;
    }
  }
  if (correct === true) {
    break;
  }

  if (attempts === 1) {
    alert(
      'this is a correct answer , soul , mulan , sea , the act , my spy , us , ode to joy , unplanned , the hustle , the upside'
    );

    break;
  }
  attempts -= 1;
  userGuess = prompt('please try again you have : ' + attempts + ' remaining!');
}

console.log(score);
confirm('THANK YOU FOR PLAYING WITH ME. YOUR SCORE IS ' + score);
