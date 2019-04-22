// letters to guess
var letters = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m',
'n','o','p','q','r','s','t','u','v','w','x','y','z'];

// global variables
var lettersGuessed = [];

var letterToGuess = null;

var guessesLeft = 15;

var wins = 0;

var losses = 0;

// functions to hold onto html

var upgradeGuessesLeft = function () {

  document.querySelector("#guessesleft").innerHTML = guessesLeft;
};

var upgradeLetterToGuess = function () {

  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};

var upgradeGuessesMade = function () {

  document.querySelector("#guessesmade").innerHTML = lettersGuessed.join(", ");
};

// when the game resets
var reset = function () {
 
  guessesLeft = 15;
  
  lettersGuessed = [];
  
  upgradeLetterToGuess();
  
  upgradeGuessesLeft();
  
  upgradeGuessesMade();
};

// when page loads
 upgradeLetterToGuess();
 
 upgradeGuessesLeft();

 // keyboard press
document.onkeydown = function (event) {

  guessesLeft--;

 // lower case letters
  var letter = String.fromCharCode(event.which).toLowerCase();

  // your guess
  lettersGuessed.push(letter);

  upgradeGuessesLeft();

  upgradeGuessesMade();

  // game logic
  if (letter === letterToGuess) {

    wins++;
  
    document.querySelector("#wins").innerHTML = wins;

    reset();
  };

  if (guessesLeft === 0) {

    losses++;
   
    document.querySelector("#losses").innerHTML = losses;

    reset();
  }
};