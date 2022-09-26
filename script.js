const gameContainer = document.querySelector('.container');
const gameStatus = document.querySelector('.game-status');
const reset = document.querySelector('.reset');

// Play turn event call
gameContainer.addEventListener('click', play);

// Reset game event call
reset.addEventListener('click', () => resetGame(allowReset));

// Check if game is ongoing when reset is clicked 
let allowReset = false;

// Gameboard data
let gameBoard = [];

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// (displayController => {

// })()

// console.log(board)
console.log(name);
function Player(name, marker) {
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return {
        name,
        marker,
    }
}

// declare players
let playerOne = Player('boy', 'X');
let playerTwo = Player('girl', 'O')
console.table(playerOne)

let currentPlayer = playerOne;


// Play turn function
function play(e) {
    
    // Check first if selected slot is empty
    if (!e.target.textContent) {
        e.target.textContent = currentPlayer.marker;

        // Update the gameBoard array
        let index = Number(e.target.dataset.index)
        gameBoard[index] = currentPlayer.marker;

        gameEnd(gameBoard, winPatterns)
    } else {
        gameStatus.textContent = 'Select an empty slot';
    }
}

// Change current player function
function changeCurrentPlayer() {
    if (currentPlayer === playerOne) {
        currentPlayer = playerTwo;
        gameStatus.textContent = `${playerTwo.name}'s turn`
    } else {
        currentPlayer = playerOne;
        gameStatus.textContent = `${playerOne.name}'s turn`
    }
}

// Check WIN/DRAW function
function gameEnd(board, winPattern) {
   
    for (let i = 0; i < 8; i++) {
        let pattern = winPattern[i]
        let a = board[pattern[0]];
        let b = board[pattern[1]];
        let c = board[pattern[2]];

        if (a === undefined || b === undefined || c === undefined) continue;

        if (a === b && b === c) {
            gameStatus.textContent = `${currentPlayer.name} (${currentPlayer.marker}) wins, please restart game`;
            gameContainer.removeEventListener('click', play)
            allowReset =  true;
            return;
        }
    }

    // Check for draw
    if (board.join('').length >= 9) {
        gameStatus.textContent = "Game Over! It's a draw"
        gameContainer.removeEventListener('click', play);
        allowReset = true;
        return;
    }
    changeCurrentPlayer()
}

// Reset game function
function  resetGame(confirm) {

    // Allow direct refresh if allowReset is true
    if (confirm) {
        location.reload()
    } else {

        // Ask for confirmation before reload
        confirm = window.confirm('Are you sure you want to restart?')
        confirm ? location.reload() : '';
    }
}

