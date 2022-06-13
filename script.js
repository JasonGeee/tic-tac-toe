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
        getPlayer,
        getMark
    }
}

// MODULE function, displayController
const displayController = ((e) => {
    //creates 2 players, X and O
    const player1 = Players("Player X", "X");
    const player2 = Players("Player O", "O");

    //select the css by queries
    const cells = document.querySelectorAll(".cell"); //selects all the cells with class .cell
    const p1 = document.querySelector(".p1");
    const p2 = document.querySelector(".p2");
    const h1 = document.querySelector(".h1");

    //each click, add the coresponding mark
    cells.forEach(cell => cell.addEventListener('click', placeMarker));

    function placeMarker(e) {
        const container = Array.from(e.target.parentElement.children);
        let X = 0;
        let O = 0;

        //check whos turn is it
        container.forEach(cell => {
            if (cell.innerText === "X") {
                X++;
            } else if (cell.innerText === "O") {
                O++;
            }
        });

        //place mark and show whos turn it is
        if (e.target.innerText === "" && h1.innerText === "Tic Tac Toe") {
            if (X <= O) {
                console.log(e.target);
                e.target.innerText = player1.getMark();
                p1.classList.remove("players-turn");
                p2.classList.add("players-turn");
                p2.style.transition = "0.5s";
                p1.style.transition = "0.5s";
            } else if (X > O) {
                e.target.innerText = player2.getMark();
                p2.classList.remove("players-turn");
                p1.classList.add("players-turn");
                p1.style.transition = "0.5s";
                p2.style.transition = "0.5s";
            }
        }

        //creates the array to check for win condition
        gameBoard.gameBoardArray = [a1.innerText, a2.innerText, a3.innerText,
                                    b1.innerText, b2.innerText, b3.innerText,
                                    c1.innerText, c2.innerText, c3.innerText];
        
        searchBoard();
    }
    
    //searches board if there is a winner or tie
    function searchBoard() {
        let spot = 0;

        for (let i = 0; i < 9; i++) {
            if (gameBoard.gameBoardArray[i] === "X" || gameBoard.gameBoardArray[i] === "O") {
                spot++;
            }
            if (spot >= 9) {
                h1.innerText = "Tie Game!";
                p1.classList.add("player-tie");
                p2.classList.add("player-tie");
            }
        }

        //win conditions
        gameBoard.gameBoardArray.forEach(marker => {
            if (a1.innerText === marker && a2.innerText === marker && a3.innerText === marker ||
                b1.innerText === marker && b2.innerText === marker && b3.innerText === marker ||
                c1.innerText === marker && c2.innerText === marker && c3.innerText === marker ||
                a1.innerText === marker && b1.innerText === marker && c1.innerText === marker ||
                a2.innerText === marker && b2.innerText === marker && c2.innerText === marker ||
                a3.innerText === marker && b3.innerText === marker && c3.innerText === marker ||
                a1.innerText === marker && b2.innerText === marker && c3.innerText === marker ||
                a3.innerText === marker && b2.innerText === marker && c1.innerText === marker)  {
                     if (marker === "X") {
                         h1.innerText = "Player 1 WINS"
                         p1.classList.add('player-wins');
                         p2.classList.add('player-loses');
                     } else if (marker === "O") {
                         h1.innerText = "Player 2 WINS";
                         p2.classList.add('player-wins');
                         p1.classList.add('player-loses');
                     };
             };
        });
    }

    //Restarts the game
    const restart = document.querySelector('.restart');
    restart.addEventListener('click', restartGame);

    function restartGame() {
        cells.forEach(cell => {
            cell.innerText = '';
        });

        p1.classList.remove('player-wins');
        p2.classList.remove('player-wins');
        p1.classList.remove('player-loses');
        p2.classList.remove('player-loses');
        p1.classList.remove('player-tie');
        p2.classList.remove('player-tie');
        p1.classList.add('players-turn');
        p2.classList.remove('players-turn');
        h1.innerText = "Tic Tac Toe";
    };

    return{};

})();
