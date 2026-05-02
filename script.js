console.log("Welcome to Rock Paper Scissors!");

function getComputerChoice() {
    const RandomChoices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * RandomChoices.length);
    return RandomChoices[choice];
}


function getHumanChoice() {
    let humanChoice;

    while (true) {
        humanChoice = prompt("Choose (rock, paper, scissors):")
            .trim()
            .toLowerCase();

        if (
            humanChoice === "rock" ||
            humanChoice === "paper" ||
            humanChoice === "scissors"
        ) {
            return humanChoice;
        }

        console.log("Invalid input, try again.");
    }
}




function gameLogic() {

    let pc = getComputerChoice();
    let human = getHumanChoice();
    if (pc === human) {
        console.log("Draw!");
    }

    else if (pc === "rock" && human === "scissors") {
        console.log("Computer Won");
    }
    else if (pc === "paper" && human === "rock") {
        console.log("Computer won!");
    }

    else if (pc === "scissors" && human === "paper") {
        console.log("Computer won!");
    }
    else {
        console.log("You won");
    }


}
gameLogic();