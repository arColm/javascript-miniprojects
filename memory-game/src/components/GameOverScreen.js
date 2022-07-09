import React, {useState, useEffect} from "react";


const GameOverScreen = (props) => {


    return (
        <div className="gameOverScreen">
            <h2>You lost!</h2>
            <button type="button" onClick={props.startGame}>Restart</button>
        </div>
    )
}


export default GameOverScreen;