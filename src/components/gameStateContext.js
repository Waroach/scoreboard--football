import React, { createContext, useState } from "react"

export const GameState = createContext({
    gameState: {},
    setGameState: () => {},
});

export default function GameStateProvider({ children }) {
    const [gameState, setGameState] = useState({
        scoreA: 0,
        scoreB: 0,
        teamA: "",
        teamB: "",
        hasBall: "hasBallA",
        yards: 50,
        downs: 1,
        changeInYards: "",
    });
    return (
        <GameState.Provider value={{ gameState, setGameState }}>
            {children}
        </GameState.Provider>
    )
}