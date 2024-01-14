
import { useState, useEffect } from 'react';
import GameRecord from './GameRecord';

export default function MainScreen () {
    const [startGame, setStartGame] = useState(false);
    const [playerOneDeck, setPlayerOneDeck] = useState({});
    const [playerOneScore, setPlayerOneScore] = useState(0);
    const [playerTwoDeck, setPlayerTwoDeck] = useState({});
    const [playerTwoScore, setPlayerTwoScore] = useState(0);
    
    const playerInfo = {playerOne: {name: "Player One", deck: playerOneDeck, score: playerOneScore}, playerTwo: {name: "Player Two", deck: playerTwoDeck, score:playerTwoScore}};

    useEffect (()=> {
        fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(response => response.json())
        .then(json => setPlayerOneDeck(json))
        .catch(error => {
            console.log('Received an error when fetching a new deck!');
            console.error(error);
        });

        fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(response => response.json())
        .then(json => setPlayerTwoDeck(json))
        .catch(error => {
            console.log('Received an error when fetching a new deck!');
            console.error(error);
        });    
            
    },[])
    function handleStartGameButtonClick () {
        setStartGame(!startGame);
        //fetch new shuffled deck for each player from API
    }

    function handleWarButtonClick () {
        //draw card from each player's deck
        //check the higher card
        //set new score
    }
    
    return (
        <div>
            <h1>Game in Progress</h1>
            <button type="button" disabled={startGame} onClick={() => handleStartGameButtonClick()}>Start Game</button>
            <button type="button" disabled={!startGame} onClick={() => handleStartGameButtonClick()}>End Game</button>
            <br />
            {startGame && <GameRecord {...playerInfo} />}
            <button type="button" onClick={() => handleWarButtonClick()}>We Declare War!</button>

        </div>
    );
}