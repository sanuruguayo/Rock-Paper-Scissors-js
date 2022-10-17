function computerPlay() {
  const posibilities = ["rock", "paper", "scissors"];
  const computerSelection =
    posibilities[Math.floor(Math.random() * posibilities.length)];
  return computerSelection;
}

function playerSelection() {
  let valid = false;
  while (!valid) {
    player1 = prompt("Rock, paper or Scissors?").toLowerCase();
    if (player1 == "rock" || player1 == "paper" || player1 == "scissors") {
      valid = true;
      break;
    } else {
      console.log("Please choose: Rock, paper or Scissors");
    }
  }
  return player1;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "DRAW";
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") return "LOST";
    if (computerSelection == "scissors") return "WIN";
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") return "WIN";
    if (computerSelection == "scissors") return "LOST";
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") return "LOST";
    if (computerSelection == "paper") return "WIN";
  }
}

function game() {
  let CountP1 = 0;
  let CountPc = 0;
  for (let i = 0; i < 5; i++) {
    const player1 = playerSelection();
    console.log("P1 - " + player1);
    const computer = computerPlay();
    console.log("COMP - " + computer);
    const result = playRound(player1, computer);
    console.log(result);
    if (result === "LOST") {
      CountPc = CountPc + 1;
    } else if (result === "WIN") {
      CountP1 = CountP1 + 1;
    }
  }
  
  if (CountPc === CountP1) {
    alert("It's a Draw!");
  } else if (CountPc > CountP1) {
    alert("Computer Wins!");
  } else {
    alert("Player 1 Wins!");
  }
}

game();
