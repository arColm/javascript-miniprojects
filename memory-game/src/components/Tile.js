import React, { useEffect, useState } from "react";

const REVEALDURATION = 2000 //ms

/**
 * This component represents a tile on the gameboard.
 * @returns 
 */
const Tile = (props) => {
    const [revealed,setRevealed] = useState(false);

    const revealAnimation = () => {
        setRevealed(true);
        setTimeout(() => setRevealed(false),REVEALDURATION);
    }

    useEffect(() => {
        if(props.reveal) {
            //Change the color/class of this tile temporarily, then change it back to normal.
            revealAnimation();
        }
    },[])

    const getTileClass = () => {
        if(revealed) {
            return "tile revealed"
        } else {
            return "tile hidden"
        }
    }

    return (
        <div className={getTileClass()}>

        </div>
    )
}

export default Tile;