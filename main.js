let letterX = '<img src="x.png" height="120" width="120" id="x">';
let letterO = '<img src="o.png" height="120" width="120" id="o">';
let player = letterX
let numPlayers = 1;
let playerTurn = document.getElementById('turn');
let playerXMoves = [];
let playerOMoves = [];
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
  start();
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
  let squares = allSquares();

  for (let square in squares) {
    square.removeEventListener('click', play);
  }
}

function allSquares() {
  let squares = [];
  for (i = 0; i < 9; i++) {
    square = document.getElementById(`cell-${i}`);
    squares.push(square);
  }
  return squares;
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
  if (player === letterO) {
    let randomNum = Math.floor(Math.random() * 9)
    square = document.getElementById(`cell-${randomNum}`);
    console.log(square);
    if (square.innerHTML === '') {
      square.innerHTML = player;
      currentArray.push(square.id);
      winCheck();
      if (numPlayers === 0) {
        computerPlayer2();
      }
      else {
        computerPlayer();
      }
    }
  }
}

//find empty squares
//choose random empty square
//play in random empty square
//change players

function findEmptySquares () {
  let emptySquares = []
  let squares = allSquares();
  for (let square of squares) {
    if (square.innerHTML === '') {
      emptySquares.push(square)
    }
  }
  return emptySquares;
};

function choseRandomEmpty () {
  let availableSquares = findEmptySquares();
  let randomSquare = 
  availableSquares[Math.floor(Math.random() * availableSquares.length)];
  return randomSquare;
};


//maybe unnecessary
function computerPlayer2() {
  if (player === letterX) {
    square = document.getElementById(`cell-${randomNum}`);
    console.log(square);
    if (square.innerHTML === '') {
      square.innerHTML = player;
      currentArray.push(square.id);
      winCheck();
      computerPlayer();
    }
    else {
      computerPlayer2();
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
