
import { useState } from 'react';
export default function StartGameButton () {
    const {startGame, setStartGame} = useState(false);

    function handleStartGameButtonClick () {
        setStartGame(true);
    }

    return (
        <button type="button" onclick={() => handleStartGameButtonClick()}>Start Game</button>
    );
};