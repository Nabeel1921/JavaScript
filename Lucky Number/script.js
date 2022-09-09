var correctGuess = false;
//formula to produce random number between 1 to 5
var randomNumber = Math.floor(Math.random() * 5) +1;
var guess = prompt('I am thinking of a number between 1 and 5. Can you guess what it is?');
//if player left field blank then guess is redefined
if (guess === "") {
  guess = prompt('INVALID GUESS: Please type a number between 1 to 5.')
}
//if player guess out of range guess is redefined
if (parseInt(guess) > 5 || parseInt(guess) < 1) {
  guess = prompt('INVALID GUESS: Please type a number between 1 to 5.');
}
//if player enter anything other than a number i.e. alpha or symbol
if (isNaN(guess)) {
  guess = prompt('INVALID GUESS: Please type a NUMBER between 1 to 5.');
}
/*if player guess is too high prompts another attempt
if player guess correct prints correct statement*/
if (parseInt(guess) === randomNumber) {
  correctGuess = true;
} else if(parseInt(guess) > randomNumber) {
  var guessLess = prompt('Try again. The number I am thinking of is less than ' + guess + '.');
} 
  if (parseInt(guessLess) === randomNumber) {
    correctGuess = true;
  }
/*if player guess is too low prompts another attempt
if player guess correct prints correct statement*/
else if(parseInt(guess) < randomNumber) {
  var guessMore = prompt('Try again. The number I am thinking of is more than ' + guess + '.');
}
  if (parseInt(guessMore) === randomNumber) {
    correctGuess = true;
  }
//final results
if (correctGuess) {
  document.write('<p>Wow! You guessed the number. Great job!</p>');
} else {
  document.write('<p>Aww, so close! The number was ' + randomNumber + '. Better luck next time.</p>');
}