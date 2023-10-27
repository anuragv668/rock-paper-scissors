let getComputerChoice = function () {
  let num = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  let choice;
  if (num == 1) {
    choice = 'Rock';
  } else if (num == 2) {
    choice = 'Paper';
  } else {
    choice = 'Scissors';
  }
  return choice;
};

let playround = function (playerSelection, computerSelection) {
  let playerS = playerSelection.toLowerCase();
  let computerS = computerSelection.toLowerCase();
  let result;

  if (playerS == computerS) {
    result = 'It\'s a Draw';
  } else {
    if (playerS == 'rock' && computerS == 'scissors' || playerS == 'paper' && computerS == 'rock' || playerS == 'scissors' && computerS == 'paper') {
      result = 'You Win! ' + playerS + ' beats ' + computerS;
    }
    else {
      result = 'You Lose! ' + computerS + ' beats ' + playerS;
    }
  }

  return result;
};

let setScore = (string) => {
  if (string.includes('Win')) {
    playerScore++;
  } else if (string.includes('Lose')) {
    computerScore++;
  }
};

let checkWinner = () => {
  if (playerScore >= 5) {
    return 'HURRAY!! YOU WON THE GAME!';
  } else if (computerScore >= 5) {
    return 'YOU LOST! BETTER LUCK NEXT TIME!';
  } return '';
};

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const gResult = document.getElementById('gResult');
const scores = document.getElementById('scores');
const round = document.getElementById('round');
let playerScore = 0;
let computerScore = 0;

rock.addEventListener('click', () => {
  gResult.innerText = playround('rock', getComputerChoice());
  setScore(gResult.innerText);
  scores.innerText = `playerScore ${playerScore} computerScore ${computerScore}`
  round.innerText = checkWinner();
});

paper.addEventListener('click', () => {
  gResult.innerText = playround('paper', getComputerChoice());
  setScore(gResult.innerText);
  scores.innerText = `playerScore ${playerScore} computerScore ${computerScore}`
  round.innerText = checkWinner();
});

scissors.addEventListener('click', () => {
  gResult.innerText = playround('scissors', getComputerChoice());
  setScore(gResult.innerText);
  scores.innerText = `playerScore ${playerScore} computerScore ${computerScore}`
  round.innerText = checkWinner();
  });

