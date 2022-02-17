import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { GameState } from './gameStateContext';


export default function Scoreboard() {
    const { gameState } = useContext(GameState);

    return (
        <div>
            <header>
                <nav>
                    <Link to="/Admin">Admin</Link>
                </nav>
                <h2>Scoreboard</h2>
            </header>
            <h1>ScoreBoard</h1>
            {["A", "B"].map((c) => {
                const key = `score${c}`;
                return(
                    <div key={c}>
                        <h2>
                            {gameState[`team${c}`]}
                            {gameState.hasBall === `hasBall${c}` ? " has the ball" : ""}
                        </h2>
                        <span> {gameState[key]}</span>
                    </div>
                );
            })}
            <h4>Current Down {gameState.downs}</h4>
            <h4>Football is at the {gameState.yard} line</h4>
        </div>
    );
}