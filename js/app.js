'use strict';

// add console checks, do CSS shit too. Consider cap fix for prompts.

//collect user data and greeting message
alert('Welcome! Let\'s play a game to see how well you know me!');

var username = prompt('First of all, what is your name?');
console.log('User is registered as ' + username + '.');

alert('Excellent! Welcome, ' + username + ' . Let\'s do this.');

// //questions 1-5 and establishes correct answer counter
var numberOfCorrect = 0;
var numberOfQuestions = 7;

var answerOne = prompt('Have I broken a bone before?').toLowerCase();
console.log(answerOne);
if (answerOne === 'yes' || answerOne === 'y') {
  alert('You are correct! It was one of my pinky finger bones on the right hand. Commonly known as a Boxer\'s Fracture.');
  numberOfCorrect++;
  console.log(username + ' answered the first question correctly!');
} else {
  alert('You\'re incorrect. I have broken one bone.');
  console.log(username + ' answered the first question incorrectly.');
}

var answerTwo = prompt('Is Halloween my favorite holiday?').toLowerCase();
console.log(answerTwo);
if (answerTwo === 'no' || answerTwo === 'n') {
  alert(username + ' you are correct! Most people don\'t know that about me.');
  numberOfCorrect++;
  console.log(username + ' answered the second questions correctly!');
} else {
  alert(username + ', it\'s like you have never met me!');
  console.log(username + ' has answered the second question incorrectly.');
}

var answerThree = prompt('Do I live in Seattle, WA?').toLowerCase();
console.log(answerThree);
if (answerThree === 'no' || answerThree === 'n') {
  alert('Very good! I live in Bothell, WA.');
  numberOfCorrect++;
  console.log(username + ' has gotten the third question correct.');
} else {
  alert('I am sorry ' + username + '. I actually live in Bothell, WA.');
  console.log(username + ' has answered the third question incorrectly.');
}

var answerFour = prompt('Am I an avid tobacco pipe and cigar smoker?').toLowerCase();
console.log(answerFour);
if (answerFour === 'yes' || answerFour === 'y') {
  alert('You\'re darn toot\'n! I will take a nice Latakia in my pipe or a wonderful Arturo Fuente Rosado Sungrown cigar any day of the week!');
  numberOfCorrect++;
  console.log(username + ' has gotten the fourth question correct.');
} else {
  alert('Wow, ' + username + '! We can\'t be friends any longer.');
  console.log(username + ' has answered the fourth question incorrectly.');
}

var answerFive = prompt('Do I like board games?').toLowerCase();
console.log(answerFive);
if (answerFive === 'yes' || answerFive === 'y') {
  alert(username + ', that is right. Let me know if you ever want to play!');
  numberOfCorrect++;
  console.log(username + ' has gotten the fifth and final question correct.');
} else {
  alert('You couldn\'t be more wrong.');
  console.log(username + ' has answered the fifth question correctly.');
}

// Variables are established and the user is prompted for a guess. The attempt is incremented for every incorrect guess. Terminates when correct answer given.
var questionSixGuessLimit = 4;
var questionSixAttempt = 0;
var myCountriesVisited = 3;

while (questionSixAttempt < questionSixGuessLimit) {
  var answerSix = Number(prompt('Guess how many countries I have been to!'));
  questionSixAttempt++;
  console.log('The user has guessed: ' + answerSix + '.');
  if (answerSix === myCountriesVisited) {
    alert(username + ', ' + answerSix + ' is correct. I have been to Jamaica, Canada, and the US! It took you ' + questionSixAttempt + ' attempt(s).');
    numberOfCorrect++;
    console.log(username + ' has answered question 6 correctly with an input of: ' + answerSix);
    break;
  }
  else if (answerSix < myCountriesVisited) {
    alert(answerSix + ' is too few. I have certainly been to more countries than that!');
  }
  else {
    alert(answerSix + ' is too many! I wish I had been to so many.');
  }
  console.log(username + ' has attempted to guess ' + questionSixAttempt + ' time(s).');
  if (questionSixAttempt === questionSixGuessLimit) {
    alert('I am sorry ' + username + '. You only had ' + questionSixGuessLimit + ' chances to guess.');
    console.log(username + ' has failed to guess in ' + questionSixGuessLimit + ' attempts.');
  }
}


var questionSevenGuessLimit = 6;
var questionSevenAttempt = 0;
var remainingAttempts = questionSevenGuessLimit - 1;
var myLarps = ['alliance', 'spite', 'camarilla', 'sabbat', 'werewolf'];
while (questionSevenAttempt < questionSevenGuessLimit) {
  var answerSeven = prompt(username + ' can you name a Live Action Role Play that I have participated in?').toLowerCase();
  questionSevenAttempt++;
  console.log('The user has guessed ' + answerSeven + '.');
  if (myLarps.includes(answerSeven)) {
    alert('Absolutely! I always have such a good time at ' + answerSeven + '.');
    alert('Here is a list of all of the LARPs that I have played in: ' + myLarps.toString());
    console.log(username + ' has answered question 7 correctly.')
    numberOfCorrect++;
    break;
  } else {
    alert('I haven\'t tried ' + answerSeven + ' yet. I will add it to my todo list. Try again! I will give you ' + remainingAttempts-- + ' chance(s).');
    console.log('User has guessed incorrectly and will be given another chance.');
  }
  if (questionSevenAttempt === questionSevenGuessLimit) {
    alert('I am sorry ' + username + ' you only had ' + questionSevenGuessLimit + ' chances. I have played in ' + myLarps.toString());
    console.log('The user has run out of attempts to answer question 7 correctly.');
  }
}

alert('You successfully got ' + numberOfCorrect + ' out of ' + numberOfQuestions + '.');
console.log(numberOfCorrect + ' out of ' + numberOfQuestions + 'questions were answered correctly by ' + username + '.');

