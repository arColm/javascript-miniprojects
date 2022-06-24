import * as gameboard from "../src/gameboard.js";

test("Adding a ship to a board", () => {
    let testBoard = gameBoard.createGameboard(6);
    testBoard.addShip(2,[3,4],"north");
})


test("Receiving an attack with invalid coordinates on a board returns an error", () => {
    let testBoard = gameboard.createGameboard(6);
})