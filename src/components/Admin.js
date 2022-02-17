import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { GameState } from './gameStateContext';
import CountPoints from './countPoints'


export default function Admin() {
    const { gameState, setGameState} = useContext(GameState);

    const updateTeamState = (event) => {
        const {name, value} = event.target;
        setGameState((prev) => {
            return{ ...prev, [name]: value }
        })
    }

    const updateYardLine = () => {
        setGameState((prev) => {
            let downs = prev.downs;
            let hasBall = prev.hasBall;
            if(prev.changeInYards >= 10) downs = 1;
            else if(downs >= 4) {
                hasBall = prev.hasBall === 'hasBallA' ? 'hasBallB' : 'hasBallA';
                downs = 1;
            } else {
                downs++
            }

            return {
                ...prev,
                yards: Number(prev.yards) + Number(prev.changeInYards),
                changeInYards: '',
                downs: downs,
                hasBall: hasBall,
            };
        });
    };

    console.log(gameState);
    return (
        <div>
            <header>
                <nav>
                    <Link to="/">Home</Link>
                </nav>
                <h2>Admin Page Change the scrore here</h2>
            </header>
            <div>
                <div>
                    <h2>Welcome, Please type in the team names</h2>
                    <h2>The radio button shows who has the ball</h2>
                </div>
                <div>
                    {/* Team A */}
                    <input 
                        type='text'
                        value={gameState.teamA}
                        onChange={updateTeamState}
                        name='teamA'
                    />
                    <input 
                        type='radio'
                        value='hasBallA'
                        onChange={updateTeamState}
                        name='hasBall'
                        checked={gameState.hasBall === 'hasBallA'}
                    />
                    {/* Team B */}
                    <input 
                        type='text'
                        value={gameState.teamB}
                        onChange={updateTeamState}
                        name='teamB'
                    />
                    <input 
                        type='radio'
                        value='hasBallB'
                        onChange={updateTeamState}
                        name='hasBall'
                        checked={gameState.hasBall === 'hasBallB'}
                    />
                    <CountPoints />
                    <input
                        type='number'
                        name='changeInYards'
                        onChange={updateTeamState}
                        value={gameState.changeInYards}
                    />
                    <button onClick={updateYardLine}>Update the yard Lin</button>
                    <h4>{gameState.yards} Yard Line</h4>
                    <h4># of downs {gameState.downs}</h4>
                </div>
            </div>
        </div>
    );
}