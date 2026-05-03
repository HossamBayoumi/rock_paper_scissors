console.log("Welcome to Rock Paper Scissors!");

function getComputerChoice() {
    const randomChoices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * randomChoices.length);
    return randomChoices[choice];
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

let computerScore = 0;
let humanScore = 0;

function playRound(pcChoice, humanChoice) {

    if (pcChoice === humanChoice) {
        console.log("Draw!");
    }

    else if (pcChoice === "rock" && humanChoice === "scissors") {
        console.log("You Lose! Rock beats Scissors");
        computerScore++;
    }
    else if (pcChoice === "paper" && humanChoice === "rock") {
        console.log("You Lose! Paper beats Rocks");
        computerScore++;
    }

    else if (pcChoice === "scissors" && humanChoice === "paper") {
        console.log("You Lose! Scissors beats Paper");
        computerScore++;
    }
    else {
        console.log("You Won");
        humanScore++;
    }

}

function playGame() {

    for (let i = 0; i < 5; i++) {
        const pcChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        playRound(pcChoice, humanChoice);
    }

    console.log(`Game over! You: ${humanScore} | Computer: ${computerScore}`);

}
playGame();
