let humanScore = 0;
let computerScore = 0;
let round = 1;
let gameStart = false;
let gameId = 0;

function getComputerChoice() {
  let cpChoice = Math.floor(Math.random() * 3);
  const choices = ["fireball", "poisonwave", "rain"];
  let computerChoice = choices[cpChoice];
  return computerChoice;
}

const pickMove = document.querySelector(".pickMove");

function waitForUserChoice() {
  return new Promise((resolve) => {
    const fireball = document.getElementById("fireball");
    const poisonwave = document.getElementById("poisonwave");
    const rain = document.getElementById("rain");

    fireball.onclick = () => resolve("fireball");
    poisonwave.onclick = () => resolve("poisonwave");
    rain.onclick = () => resolve("rain");
  });
}
async function play() {
  const myId = ++gameId;
  while (humanScore < 3 && computerScore < 3) {
    if (myId !== gameId) return;
    title.textContent = `Round ${round}`;
    const humanChoice = await waitForUserChoice();
    if (myId !== gameId) return;
    playRound(humanChoice, getComputerChoice());
    round += 1;
  }
  if (humanScore === 3) {
    title.textContent = "Player wins!";
  } else {
    title.textContent = "Computer wins!";
  }
}

function createMoveImg(choice) {
  const img = document.createElement("img");
  img.src = moveIcons[choice].src;
  img.alt = moveIcons[choice].alt;
  return img;
}

function playRound(humanChoice, computerChoice) {
  const removeGameMoves = showMove.querySelectorAll("img");
  removeGameMoves.forEach((element) => element.remove());
  playerMove.appendChild(createMoveImg(humanChoice));
  computerMove.appendChild(createMoveImg(computerChoice));
  document.querySelector("#Winner span").textContent = "Winner!";

  if (
    (humanChoice == "fireball" && computerChoice == "rain") ||
    (humanChoice == "poisonwave" && computerChoice == "fireball") ||
    (humanChoice == "rain" && computerChoice == "poisonwave")
  ) {
    humanScore += 1;
    playerCounter.textContent = humanScore;
    console.log(`Human plays ${humanChoice}`);
    console.log(`Computer plays ${computerChoice}`);
    console.log("Human won the round!");
    console.log("========================================");
    winningMove.appendChild(createMoveImg(humanChoice));
  } else if (humanChoice == computerChoice) {
    console.log(`Computer plays ${computerChoice}`);
    console.log(`Human plays ${humanChoice}`);
    console.log("Its a tie go again!");
    console.log("========================================");
    document.querySelector("#Winner span").textContent = "Its a Tie!";
  } else {
    computerScore += 1;
    computerCounter.textContent = computerScore;
    console.log(`Computer plays ${computerChoice}`);
    console.log(`Human plays ${humanChoice}`);
    console.log("Computer won the round!");
    console.log("========================================");
    winningMove.appendChild(createMoveImg(computerChoice));
  }
}

const title = document.querySelector("h1");
const startBtn = document.querySelector("#startButton");
const gameRules = document.querySelectorAll(".gameRules");
const mainContent = document.querySelector(".mainContent");
const playerCounter = document.createElement("span");
const computerCounter = document.createElement("span");
const hiddenItems = document.querySelectorAll(".hidden");
const showMove = document.querySelector(".showMove");
let playerMove = document.querySelector("#playerMove");
let winningMove = document.querySelector("#Winner");
let computerMove = document.querySelector("#computerMove");
const moveIcons = {
  fireball: { src: "./img/Fireball_(Original_Sin_2).jpg", alt: "Fireball" },
  poisonwave: { src: "./img/geomancer-14-15.png", alt: "Poison wave" },
  rain: { src: "./img/hydrosophist_rain-icon.png", alt: "Rain" },
};

function createDashboard() {
  const scoreDashboard = document.createElement("div");
  scoreDashboard.style.display = "flex";
  scoreDashboard.style.gap = "2rem";

  const playerDash = document.createElement("div");
  const playerName = document.createElement("span");
  playerDash.style.display = "flex";
  playerDash.style.flexDirection = "column";
  playerDash.style.alignItems = "center";
  playerDash.appendChild(playerName);
  playerDash.appendChild(playerCounter);
  playerName.textContent = "Your score:";
  playerCounter.textContent = "0";

  const computerDash = document.createElement("div");
  const computerName = document.createElement("span");
  computerDash.style.display = "flex";
  computerDash.style.flexDirection = "column";
  computerDash.style.alignItems = "center";
  computerDash.appendChild(computerName);
  computerDash.appendChild(computerCounter);
  computerName.textContent = "Computer's score:";
  computerCounter.textContent = "0";

  scoreDashboard.appendChild(playerDash);
  scoreDashboard.appendChild(computerDash);
  mainContent.insertBefore(scoreDashboard, showMove);
}
function hideAll() {
  gameRules.forEach((rule) => {
    rule.style.display = "none";
  });
  const howtoPlay = document.querySelector("p");
  howtoPlay.style.display = "none";
}

function restartGame() {
  humanScore = 0;
  computerScore = 0;
  playerCounter.textContent = "0";
  computerCounter.textContent = "0";
  const removeGameMoves = showMove.querySelectorAll("img");
  removeGameMoves.forEach((element) => element.remove());
  round = 1;
  title.textContent = "Round 1";
  document.querySelector("#Winner span").textContent = "";
  play();
}
function startGame() {
  gameStart = true;
  startBtn.textContent = "Restart";
  title.textContent = "Round 1";
  hiddenItems.forEach((item) => {
    item.classList.remove("hidden");
  });
  hideAll();
  createDashboard();
  play();
}
startBtn.addEventListener("click", () => {
  if (gameStart === false) {
    startGame();
  } else {
    restartGame();
  }
});
