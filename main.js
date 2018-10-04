let letterX = '<img src="x.png" height="120" width="120">';
let letterO = '<img src="o.png" height="120" width="120">';
let squares = document.getElementsByClassName('squares');
let player = letterX
let playerTurn = document.getElementById('turn');
let playerXMoves = [];
let playerOMoves = [];
let currentArray = playerXMoves;
//let activeCell = document.querySelectorAll('squares');
//things to be implemented
//target cell with on click event listener
//change player from x to o
//set win conditions
for (i = 0; i < 9; i++) {
  square = document.getElementById(`cell-${i}`);
  square.addEventListener('click', play);
}

function winCheck() {
  if (currentArray.includes('cell-0' && 'cell-1' && 'cell-2' || 'cell-3' && 'cell-4' && 'cell-5')) {
    if (player === letterX) {
      alert('Player X Wins!!!')
    } else {alert('Player O Wins!!')}
  }
  //if winningMoves[[cell-0, cell-1, cell-2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]] player '?' wins, strike through winning slots
}

function play(e) {
  if (e.currentTarget.innerHTML === '') {
 e.currentTarget.innerHTML = player;
 currentArray.push(e.currentTarget.id);
 console.log(currentArray);
 winCheck();
 toggle();}
}
//change player
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