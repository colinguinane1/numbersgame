var resultDisplay = document.getElementById("resultDisplay");
var livesDisplay = document.getElementById("livesDisplay");
var difficulty = document.getElementById("difficulty");
var DifficultyLabel = document.getElementById("difficultyLabel");
var showNum = document.getElementById("showNum");
var cheatDisplay = document.getElementById("showNumDisplay")
var generatedNumber;
var attempt = 0;

difficultyDisplay();

function difficultyDisplay(){
   DifficultyLabel.textContent = difficulty.value;
   generateNumber();
   createLives();
   if (showNum.checked){
    cheatDisplay.textContent = generatedNumber;
   }
}

function generateNumber(){
    generatedNumber = Math.floor(Math.random() * difficulty.value) + 1;
    if (showNum.checked){
        cheatDisplay.textContent = generatedNumber;
    }
    return generatedNumber;
}

function showNumber(){
    if(showNum.checked){
        cheatDisplay.textContent = generatedNumber;
    }
    else{
        cheatDisplay.textContent = "";
    }
}

function replay(){
    window.location.reload();
}

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

function main(){
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