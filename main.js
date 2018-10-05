let letterX = '<img src="x.png" height="120" width="120" id="x">';
let letterO = '<img src="o.png" height="120" width="120" id="o">';
let squares = document.getElementsByClassName('squares');
let player = letterX
let numPlayers = 1;
let playerTurn = document.getElementById('turn');
let playerXMoves = [];
let playerOMoves = [];
//let winningCombos = [['cell-0', 'cell-1', 'cell-2'], ['cell-3', 'cell-4', 'cell-5'], ['cell-6', 'cell-7', 'cell-8'], ['cell-0', 'cell-3', 'cell-6'], ['cell-1', 'cell-4', 'cell-7'], ['cell-2', 'cell-5', 'cell-8'], ['cell-0', 'cell-4', 'cell-8'], ['cell-2', 'cell-4', 'cell-6']];
let currentArray = playerXMoves;
let turnCount = 0;
let lineDiv = document.getElementById('line0');

function clearBoard() {
  lineDiv.innerHTML = '';
  square.innerHTML = '';
  player = letterX
  playerXMoves = [];
  playerOMoves = [];
  currentArray = playerXMoves;
  playerTurn.innerHTML = "It is player X's turn";
  turnCount = 0;
}

function zeroPlayer() {
  numPlayers = 0;
  clearBoard();
  computerPlayer2();
}

function singlePlayer() {
  numPlayers = 1;
  start();
}
function twoPlayers() {
  numPlayers = 2;
  start();
}

document.getElementById('onePlayer').addEventListener('click', singlePlayer);
document.getElementById('twoPlayer').addEventListener('click', twoPlayers);
document.getElementById('zeroPlayer').addEventListener('click', zeroPlayer);

function start() {
  for (i = 0; i < 9; i++) {
    square = document.getElementById(`cell-${i}`);
    clearBoard();
    square.addEventListener('click', play);
  }
}

function stop() {
  for (i = 0; i < 9; i++) {
    square = document.getElementById(`cell-${i}`);
    square.removeEventListener('click', play);
  }
}

function xOrOWins() {
  if (player === letterX) {
    playerTurn.innerHTML = 'Congratulations!  Player X Wins!!!';
  } else {
    playerTurn.innerHTML = 'Congratulations!  Player O Wins!!!';
  }
  stop();
}

function winCheck() {
  if (currentArray.includes('cell-0') && currentArray.includes('cell-1') && currentArray.includes('cell-2')) {
    lineDiv.innerHTML = '<div id="top-row"></div>';
    xOrOWins();
  } else if (currentArray.includes('cell-3') && currentArray.includes('cell-4') && currentArray.includes('cell-5')) {
    lineDiv.innerHTML = '<div id="middle-row"></div>';
    xOrOWins();
  } else if (currentArray.includes('cell-6') && currentArray.includes('cell-7') && currentArray.includes('cell-8')) {
    lineDiv.innerHTML = '<div id="bottom-row"></div>';
    xOrOWins();
  } else if (currentArray.includes('cell-0') && currentArray.includes('cell-3') && currentArray.includes('cell-6')) {
    lineDiv.innerHTML = '<div id="left-col"></div>';
    xOrOWins();
  } else if (currentArray.includes('cell-1') && currentArray.includes('cell-4') && currentArray.includes('cell-7')) {
    lineDiv.innerHTML = '<div id="middle-col"></div>';
    xOrOWins();
  } else if (currentArray.includes('cell-2') && currentArray.includes('cell-5') && currentArray.includes('cell-8')) {
    lineDiv.innerHTML = '<div id="right-col"></div>';
    xOrOWins();
  } else if (currentArray.includes('cell-0') && currentArray.includes('cell-4') && currentArray.includes('cell-8')) {
    lineDiv.innerHTML = '<div id="left-diag"></div>';
    xOrOWins();
  } else if (currentArray.includes('cell-2') && currentArray.includes('cell-4') && currentArray.includes('cell-6')) {
    lineDiv.innerHTML = '<div id="right-diag"></div>';
    xOrOWins();
  } else if (turnCount === 9) {
    playerTurn.innerHTML = "It's a DRAW.........";
    stop();
  } else {
    toggle();
  }
};

function computerPlayer() {
  while (player === letterO) {
    for (i = 0; i < 9; i++) {
      square = document.getElementById(`cell-${Math.floor(Math.random()*9)}`);
      if (square.innerHTML === '') {
        square.innerHTML = player;
        currentArray.push(square.id);
        turnCount++;
        winCheck();
        if (numPlayers === 0) {
          computerPlayer2();
        }
        return true;
      }
    }
  }
}

function computerPlayer2() {
  while (player === letterX) {
    for (i = 0; i < 9; i++) {
      square = document.getElementById(`cell-${Math.floor(Math.random()*9)}`);
      if (square.innerHTML === '') {
        square.innerHTML = player;
        currentArray.push(square.id);
        turnCount++;
        winCheck();
        computerPlayer();
      }
      return true;
    }
  }
}

function play(e) {
  if (e.currentTarget.innerHTML === '') {
    e.currentTarget.innerHTML = player;
    currentArray.push(e.currentTarget.id);
    turnCount++;
    winCheck();
    if (numPlayers === 1) {
      computerPlayer();
    }
  }
}

function toggle() {
  if (player === letterX) {
    player = letterO;
    currentArray = playerOMoves;
    playerTurn.innerHTML = "It is player O's turn";
  }
  else {
    player = letterX;
    currentArray = playerXMoves;
    playerTurn.innerHTML = "It is player X's turn";
  };
};
