let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0){
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissor";
    }
}


function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissor?").toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissor"){
        console.log("You win! Rock beats Paper");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice ==="scissor") {
        console.log("You lose! Scissor beats Paper");
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper defeats Rock");
        humanChoice++
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
        console.log("You win! Scissor beats Paper");
        humanChoice++;
    } else if (humanChoice === "scissor" && computerChoice === "rock") {
        console.log("You lose! Rock beats Paper");
        computerChoice++;
    } else {
        console.log("It's a Draw!");
    }
}

function playGame() {
    for (let i = 0;i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You win the match!")
        console.log("Human Score: " + humanScore + " Computer Score: " + computerScore);
    } else {
        console.log("You lose the match!")
        console.log("Human Score: " + humanScore + " Computer Score: " + computerScore);
    }
}

playGame();