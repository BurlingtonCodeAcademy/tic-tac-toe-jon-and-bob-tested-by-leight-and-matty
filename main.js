let letterX = '<img src="x.png" height="120" width="120">';
let letterO = '<img src="o.png" height="120" width="120">';
let squares = document.getElementsByClassName('squares');
let player = letterX
let playerTurn = document.getElementById('turn');
let playerXMoves = [];
let playerOMoves = [];
let currentArray = playerXMoves;
let numberOfMoves = 0
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
  while (numberOfMoves < 10) {
    if (currentArray.includes('cell-0') && currentArray.includes('cell-1') && currentArray.includes('cell-2') || currentArray.includes('cell-3') && currentArray.includes('cell-4') && currentArray.includes('cell-5') || currentArray.includes('cell-6') && currentArray.includes('cell-7') && currentArray.includes('cell-8') || currentArray.includes('cell-0') && currentArray.includes('cell-3') && currentArray.includes('cell-6') || currentArray.includes('cell-1') && currentArray.includes('cell-4') &&currentArray.includes('cell-7') || currentArray.includes('cell-2') && currentArray.includes('cell-5') && currentArray.includes('cell-8') || currentArray.includes('cell-0') && currentArray.includes('cell-4') && currentArray.includes('cell-8') || currentArray.includes('cell-2') && currentArray.includes('cell-4') && currentArray.includes('cell-6')) {
      alert(player + 'Wins!!')
  }
  //if winningMoves[[cell-0, cell-1, cell-2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]] player '?' wins, strike through winning slots
  //algorithmicly check if adjacent squares include the same image then win; state machine?
  //or add an if else that specifies player array
}

function play(e) {
  if (e.currentTarget.innerHTML === '') {
 e.currentTarget.innerHTML = player;
 currentArray.push(e.currentTarget.id);
 console.log(currentArray);
 console.log(playerXMoves);
 console.log(playerOMoves);
 winCheck();
 toggle();
   }
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