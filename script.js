// MODULE function, gameBoard
const gameBoard = (() => {
    const gameBoardArray = [];
    return {
        gameBoardArray
    }
})();

// FACTORY function, players
const Players = (name, mark) => {
    const getPlayer = () => name;
    const getMark = () => mark;
    return {
        name,
        mark
    }
}

// MODULE function, displayController
const displayController = ((e) => {
    //creates 2 players, X and O
    const player1 = new Players("Player X", "X");
    const player2 = new Players("Player O", "O");

    //select the css by queries
    const cells = document.querySelectorAll(".cell"); //selects all the cells with class .cell
    const p1 = document.querySelector(".p1");
    const p2 = document.querySelector(".p2");
    const h1 = document.querySelector(".h1");
    
})();
