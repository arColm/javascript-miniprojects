
class Ship {
    constructor(activePositions) {
        this.activePositions = activePositions;
        this.length = activePositions.length;
    }

    isSunk() {
        if(activePositions.isEmpty()) {
            return true;
        }

        return false;
    }
}

/**
 * This function creates a ship object, based on an input length, head position and direction the ship faces.
 * The directionFaced must be either "north" or "west".
 * @param {Number} length 
 * @param {Array} headPosition 
 * @param {String} directionFaced 
 * @returns 
 */
function createShip(length, headPosition,directionFaced) {
    if(length <0) {
        throw new Error("Invalid length");
    }
    
    if(!Array.isArray(headPosition)) {
        throw new Error("Invalid head position. Head position must be an array.");
    }

    if(headPosition.length != 2) {
        throw new Error("Invalid head position. Head position must have 2 coordinates [x,y].")
    }

    if(directionFaced !="north" ||directionFaced !="west") {
        throw new Error("Invalid direction faced");
    }

    let activePositions = [];
    for(let i=0;i<length;i++) {
        activePositions.push(headPosition);
        if(directionFaced==="north") {
            headPosition[1]++;
        }
        if(directionFaced==="west") {
            headPosition[0]++;
        }
    }

    return new Ship(activePositions);
}


export {
    createShip
}