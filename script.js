const gameContainer = document.querySelector('.container');
const gameStatus = document.querySelector('.game-status');
const reset = document.querySelector('.reset');


// Play turn event call
gameContainer.addEventListener('click', play);

// Reset game event call
reset.addEventListener('click', resetGame);

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
]

// (displayController => {

// })()

// console.log(board)

function Player(name, marker) {
    
    return {
        marker,
        name,
    }
}

let playerOne = Player('boy', 'X');
let playerTwo = Player('girl', 'O')

let currentPlayer = playerOne;



// Play turn function
function play(e) {
    
    
    if (!e.target.textContent) {
        // console.log(+e.target.dataset.index)
        e.target.textContent = currentPlayer.marker;

        let index = Number(e.target.dataset.index)
        gameBoard[index] = currentPlayer.marker;

        gameEnd()
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
function gameEnd() {
   
    // let marker = currentPlayer.marker;

    for (let i = 0; i < 8; i++) {
        let pattern = winPatterns[i]
        let a = gameBoard[pattern[0]];
        let b = gameBoard[pattern[1]];
        let c = gameBoard[pattern[2]];


        if (a === undefined || b === undefined || c === undefined) continue;
        console.log({a, b, c})
        console.log(pattern)

        if (a === b && b === c) {
            gameStatus.textContent = `${currentPlayer.name} (${currentPlayer.marker}) wins, please restart game`;
            gameContainer.removeEventListener('click', play)
        }
    }


    if (gameBoard.join('').length >= 9) {
        gameStatus.textContent = "Game Over! It's a draw"
    }
    changeCurrentPlayer()
    
}


// Reset game function
function  resetGame() {
    location.reload()
}

