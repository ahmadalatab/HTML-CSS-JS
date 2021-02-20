function runGame(){
    let guessString = '';
    let guessNumber = 0;
    let correct = false;
    const target =  Math.floor(Math.random() * 100) + 1 ;
    console.log(target);
    let numTries = 0;
    do {
        guessString = prompt("I am thinking of a number in the range of 1 to 100 \n\n What is the number");
        console.log(guessString);
        guessNumber = +guessString;
        console.log(guessNumber);
        numTries ++;
        correct = checkGuess(guessNumber, target);
    } while (!correct);
    alert("You got it, it took you " + numTries + " to guess correctly");
}

function checkGuess(guessNumber, target) { 
    correct = false;
    if(isNaN(guessNumber)){
        alert('You have not entered a number. \n\n Please enter a number between 1 and 100');
    } else if((guessNumber < 1) || (guessNumber > 100)) {
        alert("Please enter a number between 1 and 100");
    } else if (guessNumber > target){
        alert("Your number is too large");
    } else if (guessNumber < target){
        alert("Your number is too small");
    } else {
        correct = true;
    }
    return correct;
}