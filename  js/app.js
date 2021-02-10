'use strict';
let score = 0;
function guessJob (){
  let job = prompt('am i doctor?').toLowerCase();
  if (job === 'yes' || job === 'y') {
    alert('no way!');
  } else if (job === 'no' || job === 'n') {
    alert('good one');
    score++;
    console.log('correct answer');
  }
}
guessJob();

function guessGender (){
  let gender = prompt('am i male?').toLowerCase();
  if (gender === 'yes' || gender === 'y') {
    alert('what!!!');
  } else if (gender === 'no'||gender ==='n') {
    alert('correct');
    score++;
    console.log('correct answer');
  }
}
guessGender();

function guessPlace (){
  let place = prompt('do i live in space?').toLowerCase();
  if (place === 'yes'||place === 'y') {
    alert('hi alien');
  } else if (place === 'no'||place === 'n') {
    alert('of course');
    score++;
    console.log('correct answer');
  }
}
guessPlace ();

function guessAge (){
  let age = prompt('am i grand mother?').toLowerCase();
  if (age === 'yes'||age === 'y') {
    alert('really!!!');
  } else if (age === 'no'|| age === 'n') {
    alert('that\'s right');
    score++;
    console.log('correct answer');
  }
}
guessAge();
function guessPoint (){
  let point = prompt('Do i will git 10 points?').toLowerCase();
  if (point=== 'yes'|| point=== 'y') {
    alert('Yappy!');
    score++;
    console.log('correct answer');
  } else if (point === 'no'|| point === 'n') {
    alert('whyyyy!');
  }
}
guessPoint();

function guessChances(){
  let chances = 4;
  let userInput = prompt('can you guess my age?');
  while (chances) {
    if (userInput === '23') {
      alert('that\'s right');
      score++;
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
}
guessChances ();

function guessMovie (){
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
  let userGuess = prompt('try to guess one of my top ten movies');
  while (attempts) {
    let correct = false;
    for (let i = 0; i < moviesList.length; i++) {
      if (userGuess === moviesList[i]) {
        correct = true;
        score++;
        alert('this is the right answer');
        break;
      }
    }


    if (attempts === 1 ||correct===true ) {
      alert(
        'this is a correct answer , soul , mulan , sea , the act , my spy , us , ode to joy , unplanned , the hustle , the upside'
      );

      break;
    }
    attempts -= 1;
    userGuess = prompt('please try again you have : ' + attempts + ' remaining!');
  }
}
guessMovie();
console.log(score);
confirm('THANK YOU FOR PLAYING WITH ME. YOUR SCORE IS ' + score);
