import * as Gameboard from "./gameboard.js";

const contentDiv = document.querySelector("#content");
const BOARDSIZE = 6;

/**
 * This object stores information for a given game, and the their HTML board elements
 */
class Game {
    constructor(playerBoard,playerBoardElement,computerBoard,computerBoardElement) {
        this.playerBoard=playerBoard;
        this.playerBoardElement=playerBoardElement;
        this.computerBoard=computerBoard;
        this.computerBoardElement=computerBoardElement;
    }

    getPlayerBoard() {
        return this.playerBoard;
    }

    getPlayerBoardElement() {
        return this.playerBoardElement;
    }

    getComputerBoard() {
        return this.computerBoard;
    }

    getComputerBoardElement() {
        return this.computerBoardElement;
    }
}

function createGameboardElement(size) {
    const gameboard = Gameboard.createGameboard(size);
    const gameboardDiv = document.createElement("div");
    gameboardDiv.setAttribute("class","gameboard");

    const table = document.createElement("table");
    for(let row=0;row<size;row++) {
        let tr = document.createElement("tr");
        for(let column=0;column<size;column++) {
            let td = document.createElement("td");
            tr.appendChild(td);
            td.setAttribute("class","empty unhit");
        }
        table.appendChild(tr);
    }
    gameboardDiv.appendChild(table);


    return gameboardDiv;
}

/**
 * This function takes a game object, and a player and refreshes that player's
 * corresponding board according to the game state. The player must be either
 * "player" or "computer".
 * @param {Game} game 
 * @param {String} player 
 */
function refreshBoard(game,player) {
    let board;
    let tableRows;
    switch(player) {
        case player==="player":
            board = game.getPlayerBoard().getBoard();
            tableRows = game.getPlayerBoardElement().firstChild.children;
            break;
        case player==="computer":
            board = game.getComputerBoard().getBoard();
            tableRows = game.getComputerBoardElement().firstChild.children;
            break;
        default:
            throw new Error("Invalid player");
    }
    for(let y=0;y<BOARDSIZE;y++) {
        let tableCells = tableRows[y].children;
        for(let x=0;x<BOARDSIZE;x++) {
            let td = tableCells[x];
            let cell = board[y][x];
            switch(cell) {
                case cell===0:
                    td.setAttribute("class","empty unhit");
                    break;
                case cell===1:
                    td.setAttribute("class","ship, unhit");
                    break;
                case cell===2:
                    td.setAttribute("class","empty hit");
                    break;
                case cell===3:
                    td.setAttribute("class","ship hit");
                    break;
                default:
                    throw new Error("Invalid game board.");
            }
        }
    }
}


function initializeGame() {
    contentDiv.replaceChildren();
    const playerBoard = Gameboard.createGameboard(BOARDSIZE);
    const playerBoardElement = createGameboardElement(BOARDSIZE);
    playerBoardElement.setAttribute("class","gameboard playerBoard");

    const computerBoard = Gameboard.createGameboard(BOARDSIZE);
    const computerBoardElement = createGameboardElement(BOARDSIZE);
    computerBoardElement.setAttribute("class","gameboard computerBoard");

    contentDiv.appendChild(playerBoardElement);
    contentDiv.appendChild(computerBoardElement);

    return new Game(playerBoard,playerBoardElement,computerBoard,computerBoardElement);
}


export {
    initializeGame,
    randomizeCPUBoard
}