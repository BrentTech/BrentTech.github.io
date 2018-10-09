'use strict';

//collect user data and greeting message
alert('Welcome! Let\'s play a game to see how well you know me!');

var username = prompt('First of all, what is your name?');
console.log('User is registered as ' + username + '.')

alert('Excellent! Welcome, ' + username + ' . Let\'s do this.');


var answerOne = prompt('Have I broken a bone before?').toLowerCase();
console.log(answerOne)

if (answerOne === 'yes' || answerOne === 'y') {
    //tell them and log answer in console
    alert('You are correct! It was one of my pinky finger bones on the right hand. Commonly known as a Boxer\'s fracture');
    console.log(username + ' answered the first question correctly!');
} else {
    //tell them and log answer in console
    alert('You\'re incorrect. I have broken one bone.');
    console.log(username + ' answered the first question incorrectly.')
}