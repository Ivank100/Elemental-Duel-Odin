const prompt = require("prompt-sync")();

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let cpChoice = Math.floor(Math.random() * 3);
  const choices = ["rock", "scissors", "paper"];
  let computerChoice = choices[cpChoice];
  return computerChoice;
}

function getHumanChoice() {
  let choice = prompt("Enter your choice: ").toLowerCase();
  return choice;
}
function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock")
  ) {
    humanScore += 1;
    console.log(`Human plays ${humanChoice}`);
    console.log(`Computer plays ${computerChoice}`);
    console.log("Human won the round!");
    console.log("========================================");
  } else if (humanChoice == computerChoice) {
    console.log(`Computer plays ${computerChoice}`);
    console.log(`Human plays ${humanChoice}`);
    console.log("Its a tie go again!");
    console.log("========================================");
  } else {
    computerScore += 1;
    console.log(`Computer plays ${computerChoice}`);
    console.log(`Human plays ${humanChoice}`);
    console.log("Computer won the round!");
    console.log("========================================");
  }
}

function playGame() {
  while (humanScore < 3 && computerScore < 3)
    playRound(getHumanChoice(), getComputerChoice());
  if (humanScore === 3) {
    console.log("========================================");
    console.log(`Final score: ${computerScore}:${humanScore}`);
    console.log("Human won overall!");
  } else {
    console.log("========================================");
    console.log(`Final score: ${computerScore}:${humanScore}`);
    console.log("Computer won overall!");
  }
}

playGame();
