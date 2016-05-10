//Here we will build a guessing game
// var userName = prompt('Hi, thanks for visiting! What is your name?');
// alert('Welcome ' + userName + ', nice to meet you! Time to play a guessing game about me!');
// console.log('The user name is ' + userName + '.');

var userName = 'test';
var response1 = prompt('Do I have 3 cats?').toUpperCase();
var answer1 = 'YES';

// if (the user is correct) {
//   tell them they got it right
// } else {
//   tell them they got it wrong
// }

if (response1 === answer1 || response1 === answer1[0]) {
  alert('Nice work, ' + userName + ', you are correct!!!');
} else {
  alert('Sorry, ' + userName + ', you got it wrong!!!');
}

// var response2 = prompt();
// var answer2 = 'yes';
//
// var response2 = prompt();
// var answer2 = 'yes';
//
// var response2 = prompt();
// var answer2 = 'yes';
