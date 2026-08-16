const prompt = require("prompt-sync")();

let human_score = 0;
let computer_score = 0;

function getcomputerchoice() {
  let cp_choice = Math.floor(Math.random() * 3);
  const choices = ["rock", "scissors", "paper"];
  let computerChoice = choices[cp_choice];
  return computerChoice;
}

function getHumanchoice() {
  let choice = prompt("Enter your choice: ").toLowerCase();
  return choice;
}
function playround(humanChoice, computerChoice) {
  if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock")
  ) {
    human_score += 1;
    console.log(`Human plays ${humanChoice}`);
    console.log(`Computer plays ${computerChoice}`);
    console.log("Human won!");
  } else if (humanChoice == computerChoice) {
    console.log(`Computer plays ${computerChoice}`);
    console.log(`Human plays ${humanChoice}`);
    console.log("Its a tie go again!");
  } else {
    computer_score += 1;
    console.log(`Computer plays ${computerChoice}`);
    console.log(`Human plays ${humanChoice}`);
    console.log("Computer won!");
  }
}

playround(getHumanchoice(), getcomputerchoice());
