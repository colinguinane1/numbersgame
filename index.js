// lots and lots of variables
var resultDisplay = document.getElementById("resultDisplay");
var livesDisplay = document.getElementById("livesDisplay");
var difficulty = document.getElementById("difficulty");
var DifficultyLabel = document.getElementById("difficultyLabel");
var showNum = document.getElementById("showNum");
var cheatDisplay = document.getElementById("showNumDisplay")
var title = document.getElementById("title");
var generatedNumber;
var attempt = 0;

//initliase difficulty so its displayed as soon as the page is loaded
difficultyDisplay();

//displays difficulty value in the label
function difficultyDisplay(){
   DifficultyLabel.textContent = difficulty.value;
   generateNumber();
   createLives();
   if (showNum.checked){
    cheatDisplay.textContent = generatedNumber;
   }
}

//generates a "random" number + checks if show number is checked
function generateNumber(){
    generatedNumber = Math.floor(Math.random() * difficulty.value) + 1;
    if (showNum.checked){
        cheatDisplay.textContent = generatedNumber;
    }
    return generatedNumber;
}

//show number cheat
function showNumber(){
    if(showNum.checked){
        cheatDisplay.textContent = generatedNumber;
    }
    else{
        cheatDisplay.textContent = "";
    }
}


//replays the game / reloads webpage
function replay(){
    window.location.reload();
}


//creates number of lives based on difficulty
function createLives(){
    max_attempt = Math.round(difficulty.value / 10);
    if (max_attempt >= 12){
        max_attempt = 12;
    }
    else if (max_attempt < 3){
        max_attempt = 3;
    }
    livesDisplay.textContent = max_attempt + " lives remaining.";
    return max_attempt;
}

// main function that runs the game and checks answer
function main(){

   title.textContent = "I'm thinking of a number between 1 and " + difficulty.value;
   var playerInput = document.getElementById("input").value;
   var currentAttempt = max_attempt - attempt;
   if(currentAttempt == 0){
       alert("Out of turns!");
       replay();
   }
   else{
    if(playerInput > generatedNumber){
        resultDisplay.textContent = "Lower..";
        attempt++;
        livesDisplay.textContent = currentAttempt + " lives remaining.";
    }
    else if (playerInput < generatedNumber){
        resultDisplay.textContent = "Higher..";
        attempt++;
        livesDisplay.textContent = currentAttempt + " lives remaining.";
    }
    else if (playerInput == generatedNumber){
        resultDisplay.textContent = "Correct!";
        livesDisplay.textContent = "You guessed it in " + attempt + " tries!";
    }
    else{
        alert("Invalid Answer");
    }
   }
}