import React, { useEffect, useState } from "react";
import Tile from "./Tile";
import "../styles/Board.css";


/**
 * This component represents the game board in the game.
 * props include:
 *  - level -- current level of the game
 *  - incrementLevel -- increments the level of the parent Game component
 * @returns 
 */
const Board = (props) => {
    const [remainingTiles,setRemainingTiles] = useState(props.level+2);

    const initializeBoard = () => {
        //Change the board array size
        let n = Math.floor(props.level/2)+3
        let tempBoard = new Array(n);
        for(let i=0;i<n;i++) {
            tempBoard[i] = new Array(n).fill(0);
        }
        //Place the clickable tiles randomly across the array.
        for(let i=0;i<remainingTiles;i++) {
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
        return tempBoard

    }
    const [board,setBoard] = useState(initializeBoard());

    //Reduce the number of remaining tiles by 1
    const decrementRemainingTiles = () => {
        if(remainingTiles>0) {
            setRemainingTiles(remainingTiles-1);
        } else {
            throw new Error("Attempted to decrement tiles when number of tiles remaining is less than or equal to 0.");
        }
    }


    useEffect(() => {
        if(remainingTiles===0) {

        }
    },[remainingTiles])

    const clickTile = (row,column) => {

    }

    const renderTile = (row,column) => {
        if(board[column][row]===1){
            return (
                <Tile 
                    reveal={true}
                    onClick={clickTile(row,column)}/>
            )
        } else {
            return (
                <Tile
                    reveal={false}
                    onClick={clickTile(row,column)}/>
            )
        }
    }

    return (
        <div className="board">
            {board.map((row,rowIndex) => {
                return (
                    <div key={rowIndex}>
                        {row.map((tile,tileIndex) => {
                            return (
                                renderTile(rowIndex,tileIndex)
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Board;