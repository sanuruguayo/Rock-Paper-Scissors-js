function computerPlay() {
  const posibilities = ["rock", "paper", "scissors"];
  const computerSelection =
    posibilities[Math.floor(Math.random() * posibilities.length)];
  return computerSelection;
}

function playerSelection() {
  const playerSelection = prompt("Rock, paper or Scissors?").toLowerCase();
  return playerSelection;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "DRAW";
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") return "LOST";
    // console.log("You Lose! Paper beats Rock");
    if (computerSelection == "scissors") return "WIN";
    // console.log("You Won! Rock beats Scissors");
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") return "WIN";
    // console.log("You Won! Paper beats Rock");
    if (computerSelection == "scissors") return "LOST";
    // console.log("You Lose! Scissors beats Paper");
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") return "LOST";
    // console.log("You Lose! Rock beats Scissors");
    if (computerSelection == "paper") return "WIN";
    // console.log("You Won! Scissors beats paper");
  } else {
    console.log("¿WTF?");
  }
}

function game() {
  let CountP1=0;
  let CountPc=0;
  for (let i = 0; i < 5; i++) {
    const player1 = playerSelection();
    console.log(player1);
    const computer = computerPlay();
    console.log(computer);
    const result = playRound(player1, computer);
    console.log(result);
    if(result === "LOST"){
      CountPc = CountPc + 1;
    }else if(result ==="WIN"){
      CountP1 = CountP1 + 1;
    }
  }
  if(CountPc===CountP1){
    alert("It's a Draw!")
  }else if(CountPc>CountP1){
    alert("Computer Wins!")
  } else{
    alert("Player 1 Wins!")
  }
}

game();
