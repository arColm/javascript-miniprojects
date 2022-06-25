
class Ship {
    constructor(activePositions) {
        this.activePositions = activePositions;
        this.length = activePositions.length;
    }

    getActivePositions() {
        return this.activePositions;
    }

    /**
     * This function returns whether or not this ship is completely sunk.
     * True if no parts of the ship remains. False otherwise.
     */
    isSunk() {
        if(this.activePositions.length===0) {
            return true;
        }
        return false;
    }

    /**
     * This function takes two coordinates and checks if part of this ship exists
     * at those coordinates. If so, that part of the ship is removed, and the
     * function returns true. Otherwise returns false.
     * @param {Number} x 
     * @param {Number} y 
     */
    hit(x,y) {
        let index = this.activePositions.findIndex(shipPart => {
            return (shipPart[0]===x && shipPart[1]===y);
        });
        if(index>=0) {
            this.activePositions.splice(index,1);
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

    if(directionFaced !=="north" &&directionFaced !=="west") {
        console.log(directionFaced);
        throw new Error("Invalid direction faced");
    }

    let activePositions = [];
    let x = headPosition[0];
    let y = headPosition[1];
    for(let i=0;i<length;i++) {
        activePositions.push([x,y]);
        if(directionFaced==="north") {
            y++;
        }
        if(directionFaced==="west") {
            x++;
        }
    }
    return new Ship(activePositions);
}


export {
    createShip
}