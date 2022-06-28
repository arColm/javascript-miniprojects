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

            td.addEventListener("click",e => {
            })
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
        case "player":
            board = game.getPlayerBoard().getBoard();
            tableRows = game.getPlayerBoardElement().firstChild.children;
            break;
        case "computer":
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
                case 0:
                    td.setAttribute("class","empty unhit");
                    break;
                case 1:
                    if(player==="player") {
                        td.setAttribute("class","ship unhit");
                    }
                    break;
                case 2:
                    td.setAttribute("class","empty hit");
                    break;
                case 3:
                    td.setAttribute("class","ship hit");
                    break;
                default:
                    throw new Error("Invalid game board.");
            }
        }
    }
}

function addClickEvents(game) {
    let computerBoard = game.getComputerBoard();
    let playerBoard = game.getPlayerBoard();
    let tableRows = game.getComputerBoardElement().firstChild.children;
    for(let row=0;row<BOARDSIZE;row++) {
        let tableCells = tableRows[row].children;
        for(let column=0;column<BOARDSIZE;column++) {
            let td = tableCells[column];
            td.addEventListener("click",e => {
                if(td.getAttribute("class")==="empty unhit"||
                td.getAttribute("class")==="ship unhit") {
                    computerBoard.receiveAttack(column,row);
                    refreshBoard(game,"computer");
                    playerBoard.receiveRandomAttack(BOARDSIZE);
                    refreshBoard(game,"player");

                }
            })
        }
    }
    return 0;

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

    computerBoard.randomizeBoard(BOARDSIZE);
    let game = new Game(playerBoard,playerBoardElement,computerBoard,computerBoardElement);

    addClickEvents(game);
    return game;
}


export {
    initializeGame
}