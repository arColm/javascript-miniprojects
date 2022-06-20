
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

function createShip(activePositions) {

}


export {
    Ship
}