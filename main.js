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
let winner = null;

function clearBoard() {
  winner = null;
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
    winner = "x";
    playerTurn.innerHTML = 'Congratulations!  Player X Wins!!!';
  } else {
    winner = "o";
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

function findEmptySquare() {
  if (document.getElementById("cell-4").innerHTML === '') {
    return "cell-4";
  } else if (turnCount === 1) {
    let cornerArray = [0, 2, 6, 8];
    return "cell-" + cornerArray[(Math.floor(Math.random() * 4))];
  } else {
    let emptyArray = [];
    for (let i = 0; i < 9; i++) {
      if (document.getElementById("cell-" + i).innerHTML === '') {
        emptyArray.push("cell-" + i);
      }
    }
    console.log("emptyArray = " + emptyArray);
    let currentSpace = +currentArray[currentArray.length - 1].slice(5);
    console.log("currentSpace = " + currentSpace);
    if (emptyArray.includes("cell-" + (currentSpace + 2))) {
      console.log("+2");
      return "cell-" + (currentSpace + 2);
    } else if (emptyArray.includes("cell-" + (currentSpace - 2))) {
      console.log("-2");
      return "cell-" + (currentSpace - 2);
    } else if (emptyArray.includes("cell-" + (currentSpace + 4))) {
      console.log("+4");
      return "cell-" + (currentSpace + 4);
    } else if (emptyArray.includes("cell-" + (currentSpace - 4))) {
      console.log("-4");
      return "cell-" + (currentSpace - 4);
    } else if (emptyArray.includes("cell-" + (currentSpace + 6))) {
      console.log("+6");
      return "cell-" + (currentSpace + 6);
    } else if (emptyArray.includes("cell-" + (currentSpace - 6))) {
      console.log("-6");
      return "cell-" + (currentSpace - 6);
    } else if (emptyArray.includes("cell-" + (currentSpace + 3))) {
      console.log("+3");
      return "cell-" + (currentSpace + 3);
    } else if (emptyArray.includes("cell-" + (currentSpace - 3))) {
      console.log("-3");
      return "cell-" + (currentSpace - 3);
    } else if (emptyArray.includes("cell-" + (currentSpace + 5))) {
      console.log("+5");
      return "cell-" + (currentSpace + 5);
    } else if (emptyArray.includes("cell-" + (currentSpace - 5))) {
      console.log("-5");
      return "cell-" + (currentSpace - 5);
    } else if (emptyArray.includes("cell-" + (currentSpace + 1))) {
      console.log("+5");
      return "cell-" + (currentSpace + 1);
    } else if (emptyArray.includes("cell-" + (currentSpace - 1))) {
      console.log("-5");
      return "cell-" + (currentSpace - 1);
    } else if (emptyArray.includes("cell-" + (currentSpace + 7))) {
      console.log("+5");
      return "cell-" + (currentSpace + 7);
    } else if (emptyArray.includes("cell-" + (currentSpace - 7))) {
      console.log("-5");
      return "cell-" + (currentSpace - 7);
    } else {
      console.log("random");
      return emptyArray[(Math.floor(Math.random() * emptyArray.length))];
    }
  }
}

function computerPlayer() {
  if (winner === null) {
    let emptySquare = findEmptySquare();
    console.log("Player 1");
    document.getElementById(emptySquare).innerHTML = player;
    console.log("emptySquare = " + emptySquare);
    currentArray.push(emptySquare);
    turnCount++;
    winCheck();
    if (numPlayers === 0) {
      setTimeout(computerPlayer2, 500);
    }
  }
}

function computerPlayer2() {
  if (winner === null) {
    let emptySquare = findEmptySquare();
    console.log("Player 2");
    document.getElementById(emptySquare).innerHTML = player;
    console.log("emptySquare = " + emptySquare);
    currentArray.push(emptySquare);
    turnCount++;
    winCheck();
    setTimeout(computerPlayer, 500);
  }
}

function play(e) {
  if (e.currentTarget.innerHTML === '') {
    e.currentTarget.innerHTML = player;
    currentArray.push(e.currentTarget.id);
    turnCount++;
    winCheck();
    if (numPlayers === 1) {
      setTimeout(computerPlayer, 500);
    }
  } else {
    playerTurn.innerHTML = "Impossible! That cell is already full.";
  };
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