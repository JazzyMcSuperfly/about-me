// Here we create the variables to store the total number of scored questions and
// the number of correct responses given by the user
var totalQuestions = 7;
var correctResponses = 0;

// Here we take the user's name as input to personalize the game
var userName = prompt('Hi, thanks for visiting! What is your name?');
alert('Welcome ' + userName + ', nice to meet you! Time to play a guessing game about me!');
console.log('The user name is ' + userName + '.');

// Here come the first 5 Y/N questions
function question1() {
  var response1 = prompt('Do I have 3 cats?').toUpperCase();
  var answer1 = 'YES';

  if (response1 === answer1 || response1 === answer1[0]) {
    alert('Nice work, ' + userName + ', you are correct!!!');
    console.log('Right answer1');
    correctResponses++;
  } else {
    alert('Sorry, ' + userName + ', you got it wrong!!!');
    console.log('wrong answer1');
  }
}
question1();

function question2() {
  var response2 = prompt('Am I from the East coast?').toUpperCase();
  var answer2 = 'NO';

  if (response2 === answer2 || response2 === answer2[0]) {
    alert('Good work, ' + userName + ', you guessed correctly that I am not from the East coast.');
    console.log('right answer2');
    correctResponses++;
  } else {
    alert('Sorry, ' + userName + ', I am actually from the West coast.');
    console.log('wrong answer2');
  }
}

question2();

function question3() {
  var response3 = prompt('Ok, ' + userName + ', can you tell me if I am married?').toUpperCase();
  var answer3 = 'YES';

  if (response3 === answer3 || response3 === answer3[0]) {
    alert(userName + ', that is correct. I am actually married to my middleschool sweetheart.');
    console.log('right answer3');
    correctResponses++;
  } else {
    alert('Sorry, ' + userName + ', but I really AM married.');
    console.log('wrong answer3');
  }
}

question3();

function question4() {
  var response4 = prompt('So, ' + userName + ', can you tell me if I am a master JS programmer?').toUpperCase();
  var answer4 = 'NO';

  if (response4 === answer4 || response4 === answer4[0]) {
    alert('Correct, ' + userName + ', I am still just a beginner, but well on my way to greatness!');
    console.log('right answer4');
    correctResponses++;
  } else {
    alert('Sorry, ' + userName + ', that was wrong. Can\'t you tell I am just a beginner?');
    console.log('wrong answer4');
  }
}

question4();

function question5() {
  var response5 = prompt('Final question, ' + userName + ', does the fate of the world hang in the balance?').toUpperCase();
  var answer5 = 'YES';

  if (response5 === answer5 || response5 === answer5[0]) {
    alert('That is correct, ' + userName + ', the very fabric of reality will rests upon the rain-slick precipice of doom!');
    console.log('right answer5');
    correctResponses++;
  } else {
    alert('How wrong you are, ' + userName + '. I guess you will never realize just how important JavaScript programming really is.');
    console.log('wrong answer5');
  }
}
question5();

// Question 6 "Too high/low w/ 4 chances and alert of remaining chances"

var chances = 4;
var answer6 = 4;

function question6() {
  while (chances > 0) {
    var response6 = parseInt(prompt('Ok, ' + userName + ', here is a tough one. How many years have I been married? (YOU CURRENTLY HAVE ' + chances + ' TRIES TO GUESS CORRECTLY - HINT: THE ANSWER IS MORE THAN ZERO AND LESS THAN TEN)'));
    console.log(response6);
    if (response6 === answer6) {
      alert('You got it right, ' + userName + '! George has been married to his wife, Kelly, for 4 magical years.');
      console.log('The user guessed correctly');
      correctResponses++;
      chances = 0;
    } else if ((chances > 0) && (response6 < answer6)) {
      chances--;
      alert('Sorry, ' + userName + ', too low. Guess again! You currently have ' + chances + ' remaining.');
      console.log('The user guessed too low');
    } else if ((chances > 0) && (response6 > answer6)) {
      chances--;
      alert('Sorry, ' + userName + ', too high. Guess again! You currently have ' + chances + ' remaining.');
      console.log('The user guessed too high');
    } else if (chances === 0) {
      alert('Looks like you ran out of guesses, ' + userName + '! Try again next time, ok?');
      console.log('The user ran out of guesses');
    } else {
      chances--;
      alert('Sorry, ' + userName + ', no sense in wasting your guesses. Should have entered a number! You now have ' + chances + ' remaining.');
      console.log('The user\'s entry was NaN');
    }
  }
}

question6();

// Question 7 - Array of right answers w/ 6 chances and alert of all possible answers

var rightAnswers7 = ['SEATTLE', 'PORTLAND', 'EUGENE', 'SPRINGFIELD', 'SHORELINE'];
var cityChances = 6;
var userRightAnswer = false;

function question7() {
  while (cityChances > 0) {
    var response7 = prompt('I\'ve lived all over the place in both Oregon and Washington states in the last 20 years, ' + userName + '. Can you guess any of the cities I\'ve lived in? YOU HAVE A TOTAL OF ' + cityChances + ' CHANCES TO GUESS THE ANY ONE OF THE FIVE CORRECT ANSWERS. (HINT: They are fairly major cities.)').toUpperCase();
    console.log(response7);

    for (var i = 0; i < rightAnswers7.length; i++) {
      if (response7 === rightAnswers7[i]) {
        correctResponses++;
        userRightAnswer = true;
      }
    }

    if (userRightAnswer === true) {
      alert('Good job, ' + userName + ', you guessed correctly! Here\'s a list of all the cities George has lived in: ' + rightAnswers7);
      cityChances = 0;
    } else {
      cityChances--;
      alert('Sorry, ' + userName + ', you now have ' + cityChances + ' remaining. Guess again!');
    }
  }

  if (userRightAnswer === false) {
    alert('You\'ve run out of guesses pal! Thanks for playing, ' + userName + '!');
  }
}
question7();

alert('Thanks for playing, ' + userName + '! I hope you learned something. Your total score was ' + correctResponses + '/' + totalQuestions);
