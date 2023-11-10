//finding elements
var container = document.querySelector(".container");
var form = document.querySelector("form");
var inputElement = form.querySelector("form [type=text]");
var submitButton = form.querySelector("form [type=submit]");

var wonLostText = container.querySelector(".won-lost-text");
var computerChoice = container.querySelector("div .random-choice-computer");
var yourChoice = container.querySelector("div .your-choice-player");

var wonCount = container.querySelector("div div .won-count");
var lostCount = container.querySelector("div div .lost-count");
var tieCount = container.querySelector("div div .tie-count")

var count1 = 0;
var count2 = 0;
var count3 = 0;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    var rpsArray = ["Rock", "Paper", "Scissor"];
    var randomNumber = Math.floor(Math.random() * 3);

    var randomChoice = rpsArray[randomNumber];
    computerChoice.innerHTML = randomChoice;


    var inputValue = inputElement.value;
    inputValue = String(inputValue);
    yourChoice.innerHTML = inputValue;

    // ====================================================================================

    if (inputValue === "rock" || inputValue === "Rock" || inputValue === "ROCK" || inputValue === "r" || inputValue === "R") {
        var rock = inputValue;
    } else if (inputValue === "paper" || inputValue === "Paper" || inputValue === "PAPER" || inputValue === "p" || inputValue === "P") {
        var paper = inputValue;

    } else if (inputValue === "scissor" || inputValue === "Scissor" || inputValue === "Scissor" || inputElement === "SCISSOR" || inputValue === "s" || inputValue === "S") {
        var scissor = inputValue;
    }


    // ====================================================================================

    if (inputValue === rock || inputValue === paper || inputValue === scissor) {

        if (randomChoice === "Rock" && inputValue === scissor) {
            wonLostText.innerHTML = "You have lost !";
            count2++;
            lostCount.innerHTML = count2;

        } else if (randomChoice === "Paper" && inputValue === rock) {
            wonLostText.innerHTML = "You have lost !";
            count2++;
            lostCount.innerHTML = count2;

        } else if (randomChoice === "Scissor" && inputValue === paper) {
            wonLostText.innerHTML = "You have lost !";
            count2++;
            lostCount.innerHTML = count2;

        } else if (randomChoice === "Rock" && inputValue === paper) {
            wonLostText.innerHTML = "You have won !";
            count1++;
            wonCount.innerHTML = count1;

        } else if (randomChoice === "Paper" && inputValue === scissor) {
            wonLostText.innerHTML = "You have won !";
            count1++;
            wonCount.innerHTML = count1;

        } else if (randomChoice === "Scissor" && inputValue === rock) {
            wonLostText.innerHTML = "You have won !";
            count1++;
            wonCount.innerHTML = count1;

        } else if (randomChoice === "Rock" && inputValue === rock) {
            wonLostText.innerHTML = "Tie !";
            count3++;
            tieCount.innerHTML = count3;

        } else if (randomChoice === "Paper" && inputValue === paper) {
            wonLostText.innerHTML = "Tie !";
            count3++;
            tieCount.innerHTML = count3;

        } else if (randomChoice === "Scissor" && inputValue === scissor) {
            wonLostText.innerHTML = "Tie !";
            count3++;
            tieCount.innerHTML = count3;
        }


    } else {
        alert("Invalid Input !");
    }

});

