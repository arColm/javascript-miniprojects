import * as ship from "./ship.js";

/**
 * This class represents a gameboard of a certain specified size. 
 * On the gameboard is an array of ships, which have their locations also
 * represented in a 2d array in this object. In this 2d array:
 * 0 --- empty spot, unhit
 * 1 --- ship part, unhit
 * 2 --- empty spot, hit
 * 3 --- ship part, hit
 */
class Gameboard {
    constructor(size) {
        this.ships = [];
        this.size = size;
        this.board = [];
        for(let row=0;row<size;row++) {
            this.board.push([]);
            for(let column=0;column<size;column++) {
                this.board[row].push(0);
            }
            
        }
    }

    getShips() {
        return this.ships;
    }


    getSize() {
        return this.size;
    }

    getBoard() {
        return this.board;
    }

    /**
     * This function adds a new ship to this gameboard.
     * It returns the newly updated list of ships on this board on success.
     * @param {Number} length 
     * @param {Array} headPosition 
     * @param {String} directionFaced 
     * @returns 
     */
    addShip(length, headPosition,directionFaced) {
        let newShip = ship.createShip(length, headPosition,directionFaced);
        //Checking for invalid parameters
        switch(directionFaced) {
            case "north":
                if(headPosition[1]+length>this.size) {
                    console.log(headPosition)
                    console.log(length);
                    throw new Error("Ship is out of bounds");
                }
                break;
            case "west":
                if(headPosition[0]+length>this.size) {
                    throw new Error("Ship is out of bounds");
                }
                break;
        }

        newShip.getActivePositions().forEach(shipPart => {
            let x = shipPart[0];
            let y = shipPart[1];

            if(this.board[y][x]!==0) {
                throw new Error("A ship already exists in this position");
            }
        })

        //Adding to board
        newShip.getActivePositions().forEach(shipPart => {
            let x = shipPart[0];
            let y = shipPart[1];

            this.board[y][x]=1;
        })

        this.ships.push(newShip);


        return this.ships;
    }


    /**
     * This function takes in a pair of coordinates and tries to destroy a ship part
     * at those coordinates, if there is one. If a ship part is destroyed, this function
     * returns true. Otherwise returns false.
     * @param {Number} x 
     * @param {Number} y
     */
    receiveAttack(x,y) {
        if(x<0 || y < 0 || x >= this.size || y >= this.size) {
            throw new Error("Invalid coordinates");
        }

        if(this.ships.some(ship => {
            if(ship.hit(x,y)) {
                this.board[y][x]=3;
                return true;
            }
        })) {
           return true; 
        } else {
            this.board[y][x]=2;
            return false;
        }
    }
    
    allShipsSunk() {
        return this.ships.every(ship => {
            return ship.isSunk();
        })
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