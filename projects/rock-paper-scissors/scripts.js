let humanScore = 0;
let computerScore = 0;

//Gets player input and compares to computer
function playRound() {
  const computerChoice = getComputerChoice();
  const humanChoice = getHumanChoice();
  console.log(computerChoice);
  if (computerChoice === humanChoice) {
    console.log("TIE!");
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    return ++computerScore;
  } else if (computerChoice === "paper" && humanChoice === "scissors") {
    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    return ++humanScore;
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    return ++computerScore;
  } else if (computerChoice === "rock" && humanChoice === "paper") {
    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    return ++humanScore;
  } else if (computerChoice === "scissors" && humanChoice === "rock") {
    console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
    return ++humanScore;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    return ++computerScore;
  }
}

//Calls playRound() 5 times and compares scores to determine the winner
function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound();
    console.log(`Computer: ${computerScore} Player: ${humanScore}`);
  }
  if (computerScore === humanScore) {
    console.log("GAME IS A TIE!");
  } else if (computerScore < humanScore) {
    console.log("YOU WIN!!!!");
  } else {
    console.log("YOU LOSE!!!!!");
  }
}

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

//Prompts user for choice and returns the value
function getHumanChoice() {
  stillGoing = true;
  while (stillGoing === true) {
    humanChoice = prompt("Choose between rock, paper, or scissors");
    humanChoice = humanChoice.toLowerCase();
    switch (humanChoice) {
      case "rock":
        stillGoing = false;
        return "rock";
        break;
      case "paper":
        stillGoing = false;
        return "paper";
        break;
      case "scissors":
        stillGoing = false;
        return "scissors";
        break;
      default:
        alert("invalid answer");
        stillGoing = true;
    }
  }
}

playGame();
