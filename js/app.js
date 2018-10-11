'use strict';

// //collect user data and greeting message
// alert('Welcome! Let\'s play a game to see how well you know me!');

var username = prompt('First of all, what is your name?');
console.log('User is registered as ' + username + '.');

// alert('Excellent! Welcome, ' + username + ' . Let\'s do this.');

// //questions 1-5
// var answerOne = prompt('Have I broken a bone before?').toLowerCase();
// console.log(answerOne)
// if (answerOne === 'yes' || answerOne === 'y') {
//   alert('You are correct! It was one of my pinky finger bones on the right hand. Commonly known as a Boxer\'s Fracture.');
//   console.log(username + ' answered the first question correctly!');
// } else {
//   alert('You\'re incorrect. I have broken one bone.');
//   console.log(username + ' answered the first question incorrectly.');
// }

// var answerTwo = prompt('Is Halloween my favorite holiday?').toLowerCase();
// console.log(answerTwo);
// if (answerTwo === 'no' || answerTwo === 'n') {
//   alert(username + ' you are correct! Most people don\'t know that about me.');
//   console.log(username + ' answered the second questions correctly!');
// } else {
//   alert(username + ', it\'s like you have never met me!');
//   console.log(username + ' has answered the second question incorrectly.');
// }

// var answerThree = prompt('Do I live in Seattle, WA?').toLowerCase();
// console.log(answerThree);
// if (answerThree === 'no' || answerThree === 'n') {
//   alert('Very good! I live in Bothell, WA.');
//   console.log(username + ' has gotten the third question correct.');
// } else {
//   alert('I am sorry ' + username + '. I actually live in Bothell, WA.');
//   console.log(username + ' has answered the third question incorrectly.');
// }

// var answerFour = prompt('Am I an avid tobacco pipe and cigar smoker?').toLowerCase();
// console.log(answerFour);
// if (answerFour === 'yes' || answerFour === 'y') {
//   alert('You\'re darn toot\'n! I will take a nice Latakia in my pipe or a wonderful Arturo Fuente Rosado Sungrown cigar any day of the week!');
//   console.log(username + ' has gotten the fourth question correct.');
// } else {
//   alert('Wow, ' + username + '! We can\'t be friends any longer.');
//   console.log(username + ' has answered the fourth question incorrectly.');
// }

// var answerFive = prompt('Do I like board games?').toLowerCase();
// console.log(answerFive);
// if (answerFive === 'yes' || answerFive === 'y') {
//   alert(username + ', that is right. Let me know if you ever want to play!');
//   console.log(username + ' has gotten the fifth and final question correct.');
// } else {
//   alert('You couldn\'t be more wrong.');
//   console.log(username + ' has answered the fifth question correctly.');
// }

// Variables are established and the user is prompted for a guess. The attempt is incremented for every incorrect guess. Terminates when correct answer given.
var questionSixGuessLimit = 4;
var questionSixAttempt = 0;
var myCountriesVisited = 3;

while (questionSixAttempt < questionSixGuessLimit) {
  var answerSix = Number(prompt('Guess how many countries I have been to!'));
  questionSixAttempt++;

  if (answerSix === myCountriesVisited) {
    alert(username + ', ' + answerSix + ' is correct. I have been to Jamaica, Canada, and the US! It took you ' + questionSixAttempt + ' attempt(s).');
    console.log(username + ' has answered question 6 correctly with an input of: ' + answerSix);
    break;
  }
  else if (answerSix < myCountriesVisited) {
    alert(answerSix + ' is too few. I have certainly been to more countries than that!');
  }
  else {
    alert(answerSix + ' is too many! I wish I had been to so many.');
  }
  console.log(username + ' has attempted to guess: ' + questionSixAttempt + ' time(s).')
  if (questionSixAttempt === questionSixGuessLimit) {
    alert('I am sorry ' + username + '. You only had ' + questionSixGuessLimit + ' chances to guess.');
    console.log(username + ' has failed to guess in ' + questionSixGuessLimit + ' attempts.')
  }
}
