'use strict';

//collect user data and greeting message
alert('Welcome! Let\'s play a game to see how well you know me!');

var username = prompt('First of all, what is your name?');
console.log('User is registered as ' + username + '.');

alert('Excellent! Welcome, ' + username + ' . Let\'s do this.');

//for each question there is a response for either answer, and the response is logged in console

//first question
var answerOne = prompt('Have I broken a bone before?').toLowerCase();
console.log(answerOne)
if (answerOne === 'yes' || answerOne === 'y') {
    alert('You are correct! It was one of my pinky finger bones on the right hand. Commonly known as a Boxer\'s Fracture.');
    console.log(username + ' answered the first question correctly!');
} else {
    alert('You\'re incorrect. I have broken one bone.');
    console.log(username + ' answered the first question incorrectly.');
}


//second question
var answerTwo = prompt('Is Halloween my favorite holiday?').toLowerCase();
console.log(answerTwo);

if (answerTwo === 'no' || answerTwo === 'n') {
    alert(username + ' you are correct! Most people don\'t know that about me.');
    console.log(username + ' answered the second questions correctly!');
} else {
    alert(username + ', it\'s like you have never met me!');
    console.log(username + ' has answered the second question incorrectly.');    
}


//third question
var answerThree = prompt('Do I live in Seattle, WA?').toLowerCase();
console.log(answerThree);

if (answerThree === 'no' || answerThree === 'n') {
    alert('Very good! I live in Bothell, WA.');
    console.log(username + ' has gotten the third question correct.');
} else {
    alert('I am sorry ' + username + '. I actually live in Bothell, WA.')
    console.log(username + ' has answered the third question incorrectly.')    
}


//fourth question
var answerFour = prompt('Am I an avid tobacco pipe and cigar smoker?').toLowerCase();
console.log(answerFour);

if (answerFour === 'yes' || answerFour === 'y') {
    alert('You\'re darn toot\'n! I will take a nice Latakia in my pipe or a wonderful Arturo Fuente Rosado Sungrown cigar any day of the week!');
    console.log(username + ' has gotten the fourth question correct.');
} else {
    alert('Wow, ' + username + '! We can\'t be friends any longer.');
    console.log(username + ' has answered the fourth question incorrectly.');    
}


//fifth question
var answerFive = prompt('Do I like board games?').toLowerCase();
console.log(answerFive);

if (answerFive === 'yes' || answerFive === 'y') {
    alert(username + ', that is right. Let me know if you ever want to play!');
    console.log(username + ' has gotten the fifth and final question correct.');
} else {
    alert('You couldn\'t be more wrong.');
    console.log(username + ' has answered the fifth and final question incorrectly.');   
}