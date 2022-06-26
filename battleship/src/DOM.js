import * as Gameboard from "./gameboard.js";

const contentDiv = document.querySelector("#content");
const BOARDSIZE = 6;


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
        }
        table.appendChild(tr);
    }
    gameboardDiv.appendChild(table);


    return gameboardDiv;
}



function initializeGame() {
    contentDiv.replaceChildren();
    const playerBoard = createGameboardElement(BOARDSIZE);
    playerBoard.setAttribute("class","gameboard playerBoard");

    const computerBoard = createGameboardElement(BOARDSIZE);
    computerBoard.setAttribute("class","gameboard computerBoard");

    contentDiv.appendChild(playerBoard);
    contentDiv.appendChild(computerBoard);
}


export {
    initializeGame
}