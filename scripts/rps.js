let computerSelection;
let playerSelection;

function computerPlay() {
  computerSelection = Math.floor(Math.random() * Math.floor(3));
  switch (computerSelection) {
    case 0:
      return ["rock", 0];
    case 1:
      return ["paper", 1];
    default:
      return ["scissors", 2];
  }
}

function userPlay() {

  playerSelection = window.prompt("Rock, Paper, or Scissors? (Default: Rock)", "rock").toLowerCase();


  switch (playerSelection) {
    case "rock":
      return ["rock", 0];
    case "paper":
      return ["paper", 1];
    case "scissors":
      return ["scissors", 2];
    default:
      return ["rock", 0];
  }
}

function playRound(playerSelection, computerSelection) {
  let selectedMessage = `You Selected: ${playerSelection[0]} and the computer selected: ${computerSelection[0]}`;
  let winMessage = "You won this round!";
  let loseMessage = "You lose this round, better luck next time!";

  if (playerSelection[1] === 0 && computerSelection[1] === 2){
   return [`${selectedMessage}: ${winMessage}`, 1];
 } else if (playerSelection[1] === 1 && computerSelection[1] === 0) {
   return [`${selectedMessage}: ${winMessage}`, 1];
  } else if (playerSelection[1] === 2 && computerSelection[1] === 1) {
   return [`${selectedMessage}: ${winMessage}`, 1];
  } else if (playerSelection[1] === 0 && computerSelection[1] === 1) {
   return [`${selectedMessage}: ${loseMessage}`, 0];
  } else if (playerSelection[1] === 1 && computerSelection[1] === 2) {
   return [`${selectedMessage}: ${loseMessage}`, 0];
 } else if (playerSelection[1] === 2 && computerSelection[1] === 0) {
   return [`${selectedMessage}: ${loseMessage}`, 0];
  } else {
   return [`${selectedMessage}: This round is a draw!`, 2];
  }

}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let point;

  for (let i =0; i < 5; i++) {
    computerSelection = computerPlay();
    playerSelection = userPlay();
    point = playRound(playerSelection, computerSelection);
    if(point[1] === 0) {
      computerScore += 1;
    } else if(point[1] === 1) {
      playerScore += 1;
    }
    console.log(point[0]);
    console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`);
  }

  if(playerScore > computerScore) {
    console.log("You win!");
    return "The player wins"
  } else if (playerScore < computerScore) {
    console.log("The computer wins, better luck next time!");
    return "The computer wins"
  } else {
    console.log("The game is a draw!");
    return "The game is a draw"
  }

}

game();
