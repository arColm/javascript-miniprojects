import React, { useEffect, useState } from "react";

const REVEALDURATION = 2000 //ms

/**
 * This component represents a tile on the gameboard.
 * @returns 
 */
const Tile = (props) => {
    const [revealed,setRevealed] = useState(false);
    const [clickable,setClickable] = useState(false);

    const revealAnimation = () => {
        setClickable(false);
        setRevealed(true);
        setTimeout(() => {
            setRevealed(false);
            setClickable(true);
        },REVEALDURATION);
    }

    useEffect(() => {
            revealAnimation();
    },[props.reveal])

    const getTileClass = () => {
        if(revealed && props.reveal) {
            return "tile revealed";
        } else if(props.clicked&&props.reveal) {
            return "tile clicked revealed";
        } else if(props.clicked&& !props.reveal) {
            return "tile clicked";
        } else {
            return "tile hidden"
        }
    }

    const handleClick = () => {
        if(clickable) {
            props.handleClick();
        }
    }

    return (
        <div className={getTileClass()} onClick={handleClick}>

        </div>
    )
}

export default Tile;