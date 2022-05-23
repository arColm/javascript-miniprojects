//gameBoard stores all logic to do with the board.
const gameBoard = (() => {
    const board = document.querySelector(".board");
    let playerTurn =1;

    //Instantiates a 3x3 array of Strings.
    //. -- empty space
    //X -- X tile
    //O -- O tile
    let boardArray = [];
    for(let i=0;i<=2;i++) {
        boardArray.push([".",".","."]);
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
                let tile = boardArray[x][y];
                if(tile===".") {
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
                    console.log("a");
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
     */
    function placeTile(tileType,x,y) {
        console.log(`Place ${tileType} at ${x},${y}`);
    }

    /**
     * This function checks if a win has occurred on the board.
     */
    function checkWin() {

    }

    return {
        updateBoard,
        placeTile,
        checkWin
    };
})();

gameBoard.updateBoard();