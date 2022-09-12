const gameContainer = document.querySelector('.container');


(gameBoard = () => {
    let board = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'];
    console.log(board)
})()

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


gameContainer.addEventListener('click', play)

function play(e) {
    
    if (!e.target.textContent) {
        console.log(e.target.classList)
        e.target.textContent = currentPlayer.marker;

        changeCurrentPlayer()
    } else {
        console.log("Nothing added")
    }
}

function changeCurrentPlayer() {
    if (currentPlayer === playerOne) {
        currentPlayer = playerTwo;
    } else {
        currentPlayer = playerOne;
    }
}


// Build the functions that allow players to add marks to a specific spot on the board, and then tie it to the DOM, letting players click on the gameboard to place their marker. Don’t forget the logic that keeps players from playing in spots that are already taken!