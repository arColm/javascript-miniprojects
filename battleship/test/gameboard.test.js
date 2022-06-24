import * as gameboard from "../src/gameboard.js";

test("Creating a board", () => {
    
    let testBoard = gameboard.createGameboard(5);
    let expectedBoard = {
        ships:[],
        size:5,
        board: [
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0]
        ]
    }
    expect(testBoard).toEqual(expectedBoard);
})


test("Adding a ship to a board", () => {
    let testBoard = gameboard.createGameboard(5);
    testBoard.addShip(3,[3,2],"north");
    
    let expectedShip = {
        length:3,
        activePositions:[[3,2],[3,3],[3,4]]
    }

    let expectedBoard = {
        ships:[expectedShip],
        size:5,
        board: [
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,1,0],
            [0,0,0,1,0],
            [0,0,0,1,0]
        ]
    }
})

test("Adding a ship in an invalid location", () => {
    let testBoard = gameboard.createGameboard(5);

    expect(() => {
        testBoard.addShip(4,[2,3],"west")
    }).toThrow("Ship is out of bounds");
})

test("Adding a ship in a location that already has a ship", () => {
    let testBoard = gameboard.createGameboard(5);
    testBoard.addShip(3,[3,2],"north");
    expect(() => {
        testBoard.addShip(2,[2,3],"west")
    }).toThrow("A ship already exists in this position");
})

test("Receiving an attack with invalid coordinates on a board returns an error", () => {
    let testBoard = gameboard.createGameboard(5);
})