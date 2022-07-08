import React, {useState} from "react";
import Board from "./Board";


/**
 * This game should begin with a 3x3 grid of identical tiles at level 1. 3 tiles reveal themselves and afterwards the user must choose the same 3 tiles.
 * On success, the game continues to the next level
 * Consider that the current level is L.
 * The grid size is n x n, where n= Math.floor(L/2)+3.
 * The number of tiles in the puzzle is m, where m = 2+ L.
 * @returns 
 */


const Game = () => {
    const [level, setLevel] = useState(1);

    const incrementLevel = () => {
        setLevel(level + 1);
    };


    return (
        <div id="content">
            <h1>Score: {level}</h1>
            <Board 
                level={level}
                incrementLevel={incrementLevel}/>
        </div>
    )
}

export default Game;