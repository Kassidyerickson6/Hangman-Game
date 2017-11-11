var words = [
	"santa",
	"reindeer",
	"tree",
	"presents",
	"merry",
	"snowman"
] 

/* Create variables for correct guesses, incorrect guesses, word randomizer, # of letters in the word,
# of blanks needed, a win counter, a loss counter, and a number of guesses */

var correctGuess = [];
var incorrectGuess = []; 
var randomWord = ""; 
var lettersInWord = []; 
var numberBlanks = 0; 

var winCounter = 0;
var lossCounter = 0; 
var numberGuesses = 15; 

function HangmanGame(){ 


wrongGuesses = [];
console.log("wrong guesses", incorrectGuess);
numGuesses = 15;
CorrectGuess = [];

/* choose a random word from the "words" list. */
	randomWord = words[Math.floor(Math.random() * words.length)];

/* breaks the word apart and replace the letters with underscores. The underscrores then show up on the HTML */

	/* this takes the letters in the random word and splits the letters apart */
	lettersInWord = randomWord.split("");
	/* this finds the number of letters in the random word, and replaces in with blank spaces. */
	numberBlanks = lettersInWord.length;

	console.log(randomWord);
	console.log(numberBlanks)

	/* in this loop, the iterator i = 0 for round 1 in the loop, the condition is the number of blanks 
	needed, the increment is to add 1 
	.push adds the new items to the end of the array and returns the new length. */
	for(var i = 0; i < numberBlanks; i++){
		correctGuess.push("_");

        
	}

	console.log(correctGuess);

	/* this identifies the ID declared in HTML "hangman_word" where the blanks will then show up
	the document.GetElementById selects this based on its ID attribute in HTML
	.innerHTML sets the text, .join joins the elements from the array and returns the string*/
	document.getElementById('hangman_word').innerHTML = correctGuess.join(" ");

	/* this identifies the ID declared in HTML "guesses-left", where numberGuesses will track and update how many guesses out of 15 are left.*/
	document.getElementById('guesses-left').innerHTML = numberGuesses;
}

/*number of guess has to always equal 15 */

/* create if/else statements for whether the user guesses the correct letter or not */

/* decrease the number of guesses by one when user's guess is wrong */

/* create an if/else condition to see if a letter is alread in the wrong guesses array */

/* create a function to update the HTML with letters that are in the word, guesses we have left, wrong
guesses, and determining whether or not the user won or lost. This includes document.GetElementById statements */


function letterChecker(letter){


    var letterInWord = false;

    for(var i = 0; i < numberBlanks; i++){
        if(randomWord[i] === letter){
            letterInWord = true;

        }
    }

    if(letterInWord){
        for(i = 0; i < numberBlanks; i++){
            if(randomWord[i] === letter){
            correctGuess[i] = letter;

        }

        }
    }
    else{
        numberGuesses --;
        incorrectGuess.push(letter)
    }




}


function Complete(){


    document.getElementById('hangman_word').innerHTML = correctGuess.join(" ");
    document.getElementById('guesses-left').innerHTML = numberGuesses;
    document.getElementById('wrong-guesses').innerHTML = incorrectGuess.join(" ");



    console.log(lettersInWord);
    console.log(correctGuess);
    if(lettersInWord.join(" ") === correctGuess.join(" ")){
        winCounter++;
        alert("Congratulations, you have Won!");
        document.getElementById('win-counter').innerHTML = winCounter;
        HangmanGame();
    }
    else if(numberGuesses === 0){
        document.getElementById('loss-counter').innerHTML  = lossCounter ++;
        document.getElementById('wrong-guesses').innerHTML = "";
        alert("you are out of guesses");        
        HangmanGame();

    }




}
HangmanGame();
document.onkeyup = function(event){
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("Letter guessed:",letterGuessed)
    letterChecker(letterGuessed)
    Complete();


}

