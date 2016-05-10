// Here we take the user's name as input to personalize the game
var userName = prompt('Hi, thanks for visiting! What is your name?');
alert('Welcome ' + userName + ', nice to meet you! Time to play a guessing game about me!');
console.log('The user name is ' + userName + '.');

// Here come the 5 questions
var response1 = prompt('Do I have 3 cats?').toUpperCase();
var answer1 = 'YES';

if (response1 === answer1 || response1 === answer1[0]) {
  alert('Nice work, ' + userName + ', you are correct!!!');
  console.log('Right answer1');
} else {
  alert('Sorry, ' + userName + ', you got it wrong!!!');
  console.log('wrong answer1');
}

var response2 = prompt('Am I from the East coast?').toUpperCase();
var answer2 = 'NO';

if (response2 === answer2 || response2 === answer2[0]) {
  alert('Good work, ' + userName + ', you guessed correctly that I am not from the East coast.');
  console.log('right answer2');
} else {
  alert('Sorry, ' + userName + ', I am actually from the West coast.');
  console.log('wrong answer2');
}

var response3 = prompt('Ok, ' + userName + ', can you tell me if I am married?').toUpperCase();
var answer3 = 'YES';

if (response3 === answer3 || response3 === answer3[0]) {
  alert(userName + ', that is correct. I am actually married to my middleschool sweetheart.');
  console.log('right answer3');
} else {
  alert('Sorry, ' + userName + ', but I really AM married.');
  console.log('wrong answer3');
}

var response4 = prompt('So, ' + userName + ', can you tell me if I am a master JS programmer?').toUpperCase();
var answer4 = 'NO';

if (response4 === answer4 || response4 === answer4[0]) {
  alert('Correct, ' + userName + ', I am still just a beginner, but well on my way to greatness!');
  console.log('right answer4');
} else {
  alert('Sorry, ' + userName + ', that was wrong. Can\'t you tell I am just a beginner?');
  console.log('wrong answer4');
}

var response5 = prompt('Final question, ' + userName + ', does the fate of the world hang in the balance?').toUpperCase();
var answer5 = 'YES';

if (response5 === answer5 || response5 === answer5[0]) {
  alert('That is correct, ' + userName + ', the very fabric of reality will rests upon the rain-slick precipice of doom!');
  console.log('right answer5');
} else {
  alert('How wrong you are, ' + userName + '. I guess you will never realize just how important JavaScript programming really is.');
  console.log('wrong answer5');
}
