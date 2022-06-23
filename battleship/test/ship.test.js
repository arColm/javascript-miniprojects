import * as ship from "../src/ship.js";

test("Create a ship with appropriate attributes. (verifying jest is properly setup)", () => {
    let aShip = ship.createShip(3,[3,4],"north");
    expect(typeof aShip).toBe("object");

    let expectedShip = {
        length:3,
        activePositions:[[3,4],[3,5],[3,6]]
    }
    expect(aShip).toEqual(expectedShip);
    
})