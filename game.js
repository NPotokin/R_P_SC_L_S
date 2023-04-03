function rockClick(){
    document.getElementById("userSelection").setAttribute("src", "./images/Rock.png");
    let computerTurn = Math.random() * 10;
    if(computerTurn >= 0 && computerTurn < 2) {
    document.getElementById("computerSelection").setAttribute("src", "./images/Rock.png");
    document.getElementById("textResult").innerText = "Try Again!";
        }else if(computerTurn >= 2 && computerTurn < 4){
            document.getElementById("computerSelection").setAttribute("src", "./images/Paper.png");
            document.getElementById("textResult").innerText = "You lost!";
        }else if(computerTurn >= 4 && computerTurn < 6){
            document.getElementById("computerSelection").setAttribute("src", "./images/Scissors.png");
            document.getElementById("textResult").innerText = "You Won!";
        }else if(computerTurn >= 6 && computerTurn < 8){
            document.getElementById("computerSelection").setAttribute("src", "./images/Lizard.png");
            document.getElementById("textResult").innerText = "You Won!";
        }else {
            document.getElementById("computerSelection").setAttribute("src", "./images/Spock.png");
            document.getElementById("textResult").innerText = "You Lost!";
        }
        };

function paperClick(){
    document.getElementById("userSelection").setAttribute("src", "./images/paper.png");
    let computerTurn = Math.random() * 10;
    if(computerTurn >= 0 && computerTurn < 2) {
    document.getElementById("computerSelection").setAttribute("src", "./images/Rock.png");
    document.getElementById("textResult").innerText = "You Won!";
        }else if(computerTurn >= 2 && computerTurn < 4){
            document.getElementById("computerSelection").setAttribute("src", "./images/Paper.png");
            document.getElementById("textResult").innerText = "try again!";
        }else if(computerTurn >= 4 && computerTurn < 6){
            document.getElementById("computerSelection").setAttribute("src", "./images/Scissors.png");
            document.getElementById("textResult").innerText = "You lost!";
        }else if(computerTurn >= 6 && computerTurn < 8){
            document.getElementById("computerSelection").setAttribute("src", "./images/Lizard.png");
            document.getElementById("textResult").innerText = "You lost!";
        }else {
            document.getElementById("computerSelection").setAttribute("src", "./images/Spock.png");
            document.getElementById("textResult").innerText = "You Won!";
        }
        };

function scissorsClick(){
    document.getElementById("userSelection").setAttribute("src", "./images/Scissors.png");
    let computerTurn = Math.random() * 10;
    if(computerTurn >= 0 && computerTurn < 2) {
    document.getElementById("computerSelection").setAttribute("src", "./images/Rock.png");
    document.getElementById("textResult").innerText = "You Lost!";
        }else if(computerTurn >= 2 && computerTurn < 4){
            document.getElementById("computerSelection").setAttribute("src", "./images/Paper.png");
            document.getElementById("textResult").innerText = "victory!";
        }else if(computerTurn >= 4 && computerTurn < 6){
            document.getElementById("computerSelection").setAttribute("src", "./images/Scissors.png");
            document.getElementById("textResult").innerText = "Tie!";
        }else if(computerTurn >= 6 && computerTurn < 8){
            document.getElementById("computerSelection").setAttribute("src", "./images/Lizard.png");
            document.getElementById("textResult").innerText = "You WON";
        }else {
            document.getElementById("computerSelection").setAttribute("src", "./images/Spock.png");
            document.getElementById("textResult").innerText = "You l.o.s.t.!";
        }
        };

function lizardClick(){
    document.getElementById("userSelection").setAttribute("src", "./images/Lizard.png");
    let computerTurn = Math.random() * 10;
    if(computerTurn >= 0 && computerTurn < 2) {
    document.getElementById("computerSelection").setAttribute("src", "./images/Rock.png");
    document.getElementById("textResult").innerText = "You lost!";
        }else if(computerTurn >= 2 && computerTurn < 4){
            document.getElementById("computerSelection").setAttribute("src", "./images/Paper.png");
            document.getElementById("textResult").innerText = "victory!";
        }else if(computerTurn >= 4 && computerTurn < 6){
            document.getElementById("computerSelection").setAttribute("src", "./images/Scissors.png");
            document.getElementById("textResult").innerText = "DEFEAT";
        }else if(computerTurn >= 6 && computerTurn < 8){
            document.getElementById("computerSelection").setAttribute("src", "./images/Lizard.png");
            document.getElementById("textResult").innerText = "hey Lizard!";
        }else {
            document.getElementById("computerSelection").setAttribute("src", "./images/Spock.png");
            document.getElementById("textResult").innerText = "Win Win WIN";
        }
        };

function spockClick(){
    document.getElementById("userSelection").setAttribute("src", "./images/Spock.png");
    let computerTurn = Math.random() * 10;
    if(computerTurn >= 0 && computerTurn < 2) {
    document.getElementById("computerSelection").setAttribute("src", "./images/Rock.png");
    document.getElementById("textResult").innerText = "You won!";
        }else if(computerTurn >= 2 && computerTurn < 4){
            document.getElementById("computerSelection").setAttribute("src", "./images/Paper.png");
            document.getElementById("textResult").innerText = "lost!";
        }else if(computerTurn >= 4 && computerTurn < 6){
            document.getElementById("computerSelection").setAttribute("src", "./images/Scissors.png");
            document.getElementById("textResult").innerText = "winner!";
        }else if(computerTurn >= 6 && computerTurn < 8){
            document.getElementById("computerSelection").setAttribute("src", "./images/Lizard.png");
            document.getElementById("textResult").innerText = "defeat";
        }else {
            document.getElementById("computerSelection").setAttribute("src", "./images/Spock.png");
            document.getElementById("textResult").innerText = "oh, hye mr Spock!";
            
        }
        };

