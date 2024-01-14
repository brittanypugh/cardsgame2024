
import { useState } from 'react';
import GameRecord from './GameRecord';

export default function MainScreen () {
    const [startGame, setStartGame] = useState(false);
    const [playerOneDeck, setPlayerOneDeck] = useState([]);
    const [playerOneScore, setPlayerOneScore] = useState(0);
    const [playerTwoDeck, setPlayerTwoDeck] = useState([]);
    const [playerTwoScore, setPlayerTwoScore] = useState(0);

    function handleStartGameButtonClick () {
        setStartGame(!startGame);
    }
    
    return (
        <div>
            <h1>Game in Progress</h1>
            <button type="button" disabled={startGame} onClick={() => handleStartGameButtonClick()}>Start Game</button>
            <button type="button" disabled={!startGame} onClick={() => handleStartGameButtonClick()}>End Game</button>
            {startGame && <GameRecord />}

        </div>
    );
}