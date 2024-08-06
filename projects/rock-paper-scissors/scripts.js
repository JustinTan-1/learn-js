let humanScore = 0;
let computerScore = 0;
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const score = document.querySelector("#score");
const roundResults = document.querySelector("#roundResults");

//Gets player input and compares to computer
function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  console.log(computerChoice);
  if (computerChoice === playerChoice) {
    roundResults.textContent = "TIE!";
  } else if (computerChoice === "paper" && playerChoice === "rock") {
    roundResults.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
    return ++computerScore;
  } else if (computerChoice === "paper" && playerChoice === "scissors") {
    roundResults.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
    return ++humanScore;
  } else if (computerChoice === "rock" && playerChoice === "scissors") {
    roundResults.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
    return ++computerScore;
  } else if (computerChoice === "rock" && playerChoice === "paper") {
    roundResults.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
    return ++humanScore;
  } else if (computerChoice === "scissors" && playerChoice === "rock") {
    roundResults.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
    return ++humanScore;
  } else if (computerChoice === "scissors" && playerChoice === "paper") {
    roundResults.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
    return ++computerScore;
  }
}

//Calls playRound() 5 times and compares scores to determine the winner
// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     playRound();
//     console.log(`Computer: ${computerScore} Player: ${humanScore}`);
//   }
//   if (computerScore === humanScore) {
//     console.log("GAME IS A TIE!");
//   } else if (computerScore < humanScore) {
//     console.log("YOU WIN!!!!");
//   } else {
//     console.log("YOU LOSE!!!!!");
//   }
// }

//Returns a random choice between rock, paper, and scissors
function getComputerChoice() {
  choice = Math.floor(Math.random() * 3);
  if (choice === 2) {
    return "rock";
  } else if (choice === 1) {
    return "scissors";
  } else {
    return "paper";
  }
}

function checkForWinner() {
  if (computerScore >= 5) {
    alert("YOU LOSE");
    roundResults.remove();
    paperButton.remove();
    rockButton.remove();
    scissorsButton.remove();
  }
  if (humanScore >= 5) {
    alert("YOU WIN");
    roundResults.remove();
    paperButton.remove();
    rockButton.remove();
    scissorsButton.remove();
  }
}

function removeItems() {}

function updateScore() {
  score.textContent = `Computer: ${computerScore} Player: ${humanScore}`;
  checkForWinner();
}

rockButton.addEventListener("click", (e) => {
  playRound("rock");
  updateScore();
});
paperButton.addEventListener("click", (e) => {
  playRound("paper");
  updateScore();
});
scissorsButton.addEventListener("click", (e) => {
  playRound("scissors");
  updateScore();
});
