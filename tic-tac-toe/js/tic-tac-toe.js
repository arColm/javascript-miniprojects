//gameBoard stores all logic to do with the board.
const gameBoard = (() => {
    const board = document.querySelector(".board");
    let playerTurn =1;

    //Instantiates a 3x3 array of Strings.
    //  -- empty space
    //X -- X tile
    //O -- O tile
    let boardArray = [];
    for(let i=0;i<=2;i++) {
        boardArray.push([" "," "," "]);
    }

    /**
     * This function updates the displayed board based on the boardArray.
     */
    function updateBoard() {
        console.log(boardArray);
        //Empty the board
        board.replaceChildren();
        //Fill the board with new tiles.
        for(let y=0;y<3;y++) {
            for(let x=0;x<3;x++) {
                let tileDisplay = document.createElement("h2");
                let tile = boardArray[y][x];
                if(tile===" ") {
                    tileDisplay.setAttribute("class","tile empty");
                    tileDisplay.innerHTML=" ";
                } else if(tile==="X") {
                    tileDisplay.setAttribute("class","tile X");
                    tileDisplay.innerHTML="X";
                } else if(tile==="O") {
                    tileDisplay.setAttribute("class","tile O");
                    tileDisplay.innerHTML="O";
                }
                board.appendChild(tileDisplay);

                //Give each tile a click event.
                tileDisplay.addEventListener("click", () => {
                    if(playerTurn===1) {
                        placeTile("X",x,y);
                    } else if(playerTurn===2) {
                        placeTile("O",x,y);
                    }
                })
            }
        }

    }

    /**
     * Places an "x" or "o" tile on the gameboard.
     * @param {*String} tileType - "X" or "O", representing the tile to be placed
     * @param {*Number} x - x-coordinate of the tile to be placed
     * @param {*Number} y - y-coordinate of the tile to be placed
     * @returns 0 if no error occured.
     * @returns 1 if there already exists a tile at this location
     * @returns 2 if there is an invalid input.
     * @returns 3 if there is already a winner.
     */
    function placeTile(tileType,x,y) {
        if(tileType!=="X"&&tileType!=="O") return 2;
        if(x<0||x>2) return 2;
        if(y<0||y>2) return 2;
        
        if(checkWin()!==0) return 3;

        if(boardArray[y][x]===" ") {
            boardArray[y][x]=tileType;
            console.log(`Place ${tileType} at ${x},${y}`);
            updateBoard();
            let winner = checkWin();
            if(winner!==0) textDisplay.showWinner(winner);
            else changeTurn();
        } else {
            console.log(`There is already a tile at ${x},${y}`);
            return 1;
        }
        return 0;
    }

    /**
     * This function checks if a win has occurred on the board.
     */
    function checkWin() {
        for(let i=0;i<=2;i++) {
            //Check rows
            let firstTile = boardArray[0][i];
            if(boardArray[1][i]===firstTile&&boardArray[2][i]===firstTile) {
                if(firstTile==="X") return 1;
                if(firstTile==="O") return 2;
            }
            //Check columns
            firstTile = boardArray[i][0];
            if(boardArray[i][1]===firstTile&&boardArray[i][2]===firstTile) {
                if(firstTile==="X") return 1;
                if(firstTile==="O") return 2;
            }
        }

        //Check diagonals
        if(boardArray[0][0]===boardArray[1][1]&&boardArray[0][0]===boardArray[2][2] ||
            boardArray[0][2]===boardArray[1][1]&&boardArray[2][0]===boardArray[1][1]) {
                if(boardArray[1][1]==="X") return 1;
                if(boardArray[1][1]==="O") return 2;
        }
        return 0;
    }

    /**
     * This function changes the current player's turn.
     */
    function changeTurn() {
        if(playerTurn===1) {
            playerTurn=2;
        } else if(playerTurn ===2) {
            playerTurn = 1;
        }
        textDisplay.showTurn(playerTurn);
    }

    function resetBoard() {
        boardArray = [];
        for(let i=0;i<=2;i++) {
            boardArray.push([" "," "," "]);
        }
        playerTurn=1;
        updateBoard();
        textDisplay.showTurn(playerTurn);
    }

    return {
        updateBoard,
        placeTile,
        checkWin,
        resetBoard
    };
})();

/**
 * This module controls the text below the grid, which displays information regarding the game.
 */
const textDisplay =(() => {
    const console = document.querySelector(".console");
    const text = document.createElement("h3");

    /**
     * This function changes the text to show the current player's turn
     * @param {*Number} playerTurn - the next player's turn.
     */
    function showTurn(playerTurn) {
        text.innerHTML=`It is player ${playerTurn}'s turn`;
        console.replaceChildren(text);
    }

    /**
     * This function changes the text to show the winner.
     * @param {*Number} playerTurn - the player that has won
     */
    function showWinner(playerTurn) {
        text.innerHTML=`Player ${playerTurn} has won!`;
        console.replaceChildren(text);
    }



    return {
        showTurn,
        showWinner
    }

})();

//Constains miscellaneous buttons, including a reset.
const miscButtons =(() => {
    const resetButton = document.querySelector("button#reset");

    function initialize() {
        resetButton.addEventListener("click", e=> {
            gameBoard.resetBoard();
        })
    }



    return {
        initialize
    }
})();


gameBoard.updateBoard();
textDisplay.showTurn(1);
miscButtons.initialize();
