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


let game = function() {
  let wins = 0;
  let loss = 0;
  for (let i = 0; i < 5; ++i) {
    let userChoice = window.prompt('Rock Paper Scissors?');
    let result = playround(userChoice, getComputerChoice());
    window.alert(result);
    if (result.includes('Win')) {
      wins += 1;
    } else {
      loss += 1;
    }
  }

  if (wins > loss) {
    return 'You Won! the game';
  } else if (wins < loss) {
    return 'You Lost! the game';
  } else {
    return 'Its a Draw!';
  }
};

window.alert(game());
