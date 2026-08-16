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
    console.log("Human won the round!");
    console.log("========================================");
  } else if (humanChoice == computerChoice) {
    console.log(`Computer plays ${computerChoice}`);
    console.log(`Human plays ${humanChoice}`);
    console.log("Its a tie go again!");
    console.log("========================================");
  } else {
    computer_score += 1;
    console.log(`Computer plays ${computerChoice}`);
    console.log(`Human plays ${humanChoice}`);
    console.log("Computer won the round!");
    console.log("========================================");
  }
}

function playGame() {
  while (human_score < 3 && computer_score < 3)
    playround(getHumanchoice(), getcomputerchoice());
  if (human_score === 3) {
    console.log("========================================");
    console.log(`Final score: ${computer_score}:${human_score}`);
    console.log("Human won overall!");
  } else {
    console.log("========================================");
    console.log(`Final score: ${computer_score}:${human_score}`);
    console.log("Computer won overall!");
  }
}

playGame();
