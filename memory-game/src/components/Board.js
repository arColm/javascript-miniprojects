import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import "../styles/Board.css";


const initializeBoard = (level) => {
    //Change the board array size
    let n = Math.floor(level/2)+3
    let tempBoard = new Array(n);
    for(let i=0;i<n;i++) {
        tempBoard[i] = new Array(n).fill(0);
    }
    //Place the clickable tiles randomly across the array.
    for(let i=0;i<level+2;i++) {
        let x = Math.floor(Math.random()*n);
        let y = Math.floor(Math.random()*n);
        let placed=false;
        while(!placed) {
            if(tempBoard[y][x]===0) {
                placed = true;
                //Change this element in the array.
                tempBoard[y][x]=1;
            } else {
                x = Math.floor(Math.random()*n);
                y = Math.floor(Math.random()*n);
            }
        }
    }
    return tempBoard;

}

/**
 * This component represents the game board in the game.
 * props include:
 *  - level -- current level of the game
 *  - incrementLevel -- increments the level of the parent Game component
 * @returns 
 */
const Board = (props) => {
    const [remainingTiles,setRemainingTiles] = useState(props.level+2);
    const [board,setBoard] = useState(initializeBoard(props.level));

    //Reduce the number of remaining tiles by 1
    const decrementRemainingTiles = () => {
        if(remainingTiles>0) {
            setRemainingTiles(remainingTiles-1);
        } else {
            throw new Error("Attempted to decrement tiles when number of tiles remaining is less than or equal to 0.");
        }
    }

    useEffect(() => {
        setBoard(initializeBoard(props.level));
        setRemainingTiles(props.level+2);
    },[props.level])

    useEffect(() => {
        if(remainingTiles===0) {
            props.incrementLevel();
        }
    },[remainingTiles])

    const clickTile = (row,column) => {
        let tempBoard = board.slice();
        if(board[row][column]===1) {
            //Clicked a correct tile
            tempBoard[row][column]=2;
            decrementRemainingTiles();
        } else if(board[row][column]===0) {
            //Clicked a wrong tile
            tempBoard[row][column]=3;
            props.loseGame();
        }
        console.log(remainingTiles);
        console.log(board);
        setBoard(tempBoard);
    }


    const getClicked = (row,column) => {
        if(board[row][column]===2||board[row][column]===3) {
            return true;
        } else {
            return false;
        }
    }

    const getReveal = (row,column) => {
        if(board[row][column]===1 || board[row][column]===2) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className="board">
            {board.map((row,rowIndex) => {
                return (
                    <div key={rowIndex}>
                        {row.map((tile,tileIndex) => {
                            return (
                                <Tile
                                    key={(rowIndex+3)*(props.level)+tileIndex}
                                    reveal={getReveal(rowIndex,tileIndex)}
                                    clicked={getClicked(rowIndex,tileIndex)}
                                    handleClick={() => clickTile(rowIndex,tileIndex)}
                                    />
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Board;