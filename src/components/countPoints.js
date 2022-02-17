import React, { useContext } from 'react';
import { GameState } from './gameStateContext';

export default function CountPoints() {
    const { gameState } = useContext(GameState);

    return(
        <div>
            {['A', 'B'].map((c) => {
                const key= `score${c}`;
                return (
                    <div key={c}>
                        <h2>
                            {gameState[`team${c}`]}
                            {gameState.hasBall === `hasBall${c}` ? ' Has the ball' : ''}
                        </h2>
                        <span> {gameState[key]}</span>
                    </div>
                );
            })}
            <h4>Current Down {gameState.downs}</h4>
            <h4>Football is at the {gameState.yards} line</h4>
        </div>
    );
}