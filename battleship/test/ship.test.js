import * as ship from "../src/ship.js";

test("verify jest is properly setup", () => {
    expect(2+2).toBe(4);
})

test("Create a ship with correctly setup attributes", () => {
    let aShip = ship.createShip(3,[3,4],"north");
    expect(typeof aShip).toBe("object");

    let expectedShip = {
        length:3,
        activePositions:[[3,4],[3,5],[3,6]]
    }
    expect(aShip).toEqual(expectedShip);
})

test("Hit a ship with the correct coordinates", () => {
    let aShip = ship.createShip(3,[3,4],"north");
    expect(aShip.hit(3,4)).toBeTruthy();
    let expectedShip = {
        length:3,
        activePositions:[[3,5],[3,6]]
    }
    expect(aShip).toEqual(expectedShip);
})

test("Hit a ship with the incorrect coordinates", () => {
    let aShip = ship.createShip(3,[3,4],"north");
    expect(aShip.hit(4,3)).toBeFalsy();
    let expectedShip = {
        length:3,
        activePositions:[[3,4],[3,5],[3,6]]
    }
    expect(aShip).toEqual(expectedShip);
})