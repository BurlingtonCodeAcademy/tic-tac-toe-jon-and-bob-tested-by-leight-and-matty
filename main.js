let letterX = '<img src="x.png" height="120" width="120" id="x">';
let letterO = '<img src="o.png" height="120" width="120" id="o">';
let squares = document.getElementsByClassName('squares');
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
  player = letterX
  playerXMoves = [];
  playerOMoves = [];
  currentArray = playerXMoves;
  playerTurn.innerHTML = "It is player X's turn";
  turnCount = 0;
  for (let i = 0; i < 9; i++) {
    let clearSquare = document.getElementById(`cell-${i}`);
    clearSquare.innerHTML = '';
  }
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

function buttonStart() {
  document.getElementById('onePlayer').addEventListener('click', singlePlayer);
  document.getElementById('twoPlayer').addEventListener('click', twoPlayers);
  document.getElementById('zeroPlayer').addEventListener('click', zeroPlayer);
}

function start() {
  for (let i = 0; i < 9; i++) {
    let startSquare = document.getElementById(`cell-${i}`);
    startSquare.addEventListener('click', play);
    startSquare.innerHTML = '';
  }
  clearBoard();
}

function stop() {
  for (let i = 0; i < 9; i++) {
    let stopSquare = document.getElementById(`cell-${i}`);
    stopSquare.removeEventListener('click', play);
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
}

let emptyArray = [];
function findEmptySquare() {
  emptyArray = [];
  console.log("emptyArray1 = " + emptyArray);
  for (let i = 0; i < 9; i++) {
    if (document.getElementById("cell-" + i).innerHTML === '') {
    console.log("cell-" + i);
    emptyArray.push("cell-" + i);
    }
  }
  console.log("emptyArray2 = " + emptyArray);
    return emptyArray[(Math.floor(Math.random() * emptyArray.length))];
}

function computerPlayer() {
  let emptySquare = findEmptySquare();
  console.log("Player 1");
  console.log("emptySquare = " + emptySquare);
  document.getElementById(emptySquare).innerHTML = player;
  console.log("emptySquare = " + emptySquare);
  currentArray.push(emptySquare);
  turnCount++;
  winCheck();
  if (numPlayers === 0) {
    setTimeout(computerPlayer2, 500);
  }
}

function computerPlayer2() {
  let emptySquare = findEmptySquare();
  console.log("Player 2");
  console.log("emptySquare = " + emptySquare);
  document.getElementById(emptySquare).innerHTML = player;
  console.log("emptySquare = " + emptySquare);
  currentArray.push(emptySquare);
  turnCount++;
  winCheck();
  setTimeout(computerPlayer, 500);
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

buttonStart();