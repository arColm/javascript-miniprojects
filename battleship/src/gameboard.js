import * as ship from "./ship.js";

/**
 * This class represents a gameboard of a certain specified size. On the gameboard is an array of ships, which
 */
class Gameboard {
    constructor(size) {
        this.ships = [];
        this.size = size;
        this.board = new Array(size);
        for(let i=0;i<size;i++) {
            board[i]=new Array(size);
        }
    }

    getShips() {
        return this.ships;
    }

    addShip(Ship) {
        this.ships.push(Ship);
        return this.ships;
    }

    getSize() {
        return this.size;
    }

    getBoard() {
        return this.board;
    }

    
}

/**
 * This function creates a new Gameboard instance and returns it
 * @param {Number} size - size of the gameboard
 * @returns - New gameboard instance
 */
function createGameboard(size) {
    return new Gameboard(size);
}



export{
    createGameboard
}