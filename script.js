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




