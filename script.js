const gameContainer = document.querySelector('.container');
const gameStatus = document.querySelector('.game-status');
const reset = document.querySelector('.reset');


// Play turn event call
gameContainer.addEventListener('click', play);

// Reset game event call
reset.addEventListener('click', resetGame);

// Gameboard data
let gameBoard = [];

let winPattern = [
    []
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
        console.log(+e.target.dataset.index)
        e.target.textContent = currentPlayer.marker;

        let index = Number(e.target.dataset.index)
        gameBoard[index] = currentPlayer.marker;

        changeCurrentPlayer()
    } else {
        gameStatus.textContent = 'Select an empty slot';
    }

    gameEnd()
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
   
    console.log(gameBoard)

    let marker = currentPlayer.marker;
    console.log(marker)
 
    if (gameBoard[0] == gameBoard[1] && gameBoard[2] == gameBoard[0]) {
        if (!gameBoard[0]) return
        gameStatus.textContent = "row 1"
    }
    
    if (gameBoard[3] == gameBoard[4] && gameBoard[5] == gameBoard[3]) {
        console.log('ermm')
        if (!gameBoard[3]) return
        gameStatus.textContent = "row 2"
    }
    
    if (gameBoard[6] == gameBoard[7] && gameBoard[8] == gameBoard[6]) {
        if (!gameBoard[6]) return
        gameStatus.textContent = "row 3"
    }
    
    
    if (gameBoard[0] == gameBoard[3] && gameBoard[6] == gameBoard[0]) {
        if (!gameBoard[0]) return;
        gameStatus.textContent = 'column 1';
    }
    
    if (gameBoard[1] == gameBoard[4] && gameBoard[7] == gameBoard[1]) {
        if (!gameBoard[1]) return;
        gameStatus.textContent = 'column 2';
    }
    
    if (gameBoard[2] == gameBoard[5] && gameBoard[8] == gameBoard[2]) {
        if (!gameBoard[2]) return;
        gameStatus.textContent = 'column 3';
    }

    

    if (gameBoard.join('').length >= 9) {
        gameStatus.textContent = "Game Over! It's a draw"
    }
    
    console.log(gameBoard)
}


// Reset game function
function  resetGame() {
    location.reload()
}

