import * as gameboard from "../src/gameboard.js";
const BOARDSIZE = 5;
let testBoard;

beforeEach(() => {
    testBoard = gameboard.createGameboard(BOARDSIZE);
})


test("Creating a board", () => {
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

    expect(() => {
        testBoard.addShip(4,[2,3],"west")
    }).toThrow("Ship is out of bounds");
})

test("Adding a ship in a location that already has a ship", () => {
    testBoard.addShip(3,[3,2],"north");
    expect(testBoard.addShip(2,[2,3],"west")).toEqual(-1);
})

test("Receiving an attack with invalid coordinates on a board returns an error", () => {
    expect(() => {
        testBoard.receiveAttack(4,5)
    }).toThrow("Invalid coordinates");
})

test("Receiving an attack with valid coordinates on an empty tile", () => {
    testBoard.addShip(3,[3,2],"north");

    expect(testBoard.receiveAttack(2,3)).toBeTruthy();

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
            [0,0,2,1,0],
            [0,0,0,1,0]
        ]
    }
    expect(testBoard).toEqual(expectedBoard);
})

test("Receiving an attack with valid coordinates on a ship", () => {
    testBoard.addShip(3,[3,2],"north");
    expect(testBoard.receiveAttack(3,3)).toBeTruthy();
    let expectedShip = {
        length:3,
        activePositions:[[3,2],[3,4]]
    }
    let expectedBoard = {
        ships:[expectedShip],
        size:5,
        board: [
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,1,0],
            [0,0,0,3,0],
            [0,0,0,1,0]
        ]
    }
    expect(testBoard).toEqual(expectedBoard);
})

test("Receiving an attack on an already hit empty tile returns false", () => {
    testBoard.addShip(3,[3,2],"north");
    testBoard.receiveAttack(2,2);
    expect(testBoard.receiveAttack(2,2)).toBeFalsy();
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
            [0,0,2,1,0],
            [0,0,0,1,0],
            [0,0,0,1,0]
        ]
    }
    expect(testBoard).toEqual(expectedBoard);
})

test("Receiving an attack on an already hit ship tile returns false", () => {
    testBoard.addShip(3,[3,2],"north");
    testBoard.receiveAttack(3,3);
    expect(testBoard.receiveAttack(3,3)).toBeFalsy();
    let expectedShip = {
        length:3,
        activePositions:[[3,2],[3,4]]
    }
    let expectedBoard = {
        ships:[expectedShip],
        size:5,
        board: [
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,1,0],
            [0,0,0,3,0],
            [0,0,0,1,0]
        ]
    }
    expect(testBoard).toEqual(expectedBoard);
})

test("A board with an active ship part is considered not sunk", () => {
    testBoard.addShip(3,[3,2],"north");
    testBoard.receiveAttack(3,2);
    testBoard.receiveAttack(3,4);
    expect(testBoard.allShipsSunk()).toBeFalsy();
})

test("A board with no active ship parts is considered sunk", () => {
    
    testBoard.addShip(3,[3,2],"north");
    testBoard.receiveAttack(3,2);
    testBoard.receiveAttack(3,3);
    testBoard.receiveAttack(3,4);
    expect(testBoard.allShipsSunk()).toBeTruthy();
})

test("Randomly placing ships on the board places ships correctly", () => {
    expect(testBoard.randomizeBoard(BOARDSIZE)).toBeTruthy();
})

test("Randomly receiving an attack returns true on success", () => {
    testBoard.addShip(3,[3,2],"north");
    expect(testBoard.receiveRandomAttack(BOARDSIZE)).toBeTruthy();
    expect(testBoard.receiveRandomAttack(BOARDSIZE)).toBeTruthy();
    expect(testBoard.receiveRandomAttack(BOARDSIZE)).toBeTruthy();
})