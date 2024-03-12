import { useEffect, useState } from 'react';
import GameRecord from './GameRecord';

export default function MainScreen() {
  const [startGame, setStartGame] = useState(false);
  const [playerOne, setPlayerOne] = useState({});
  const [playerTwo, setPlayerTwo] = useState({});

  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [remaining, setRemaining] = useState(52);

  const [playerOneCard, setPlayerOneCard] = useState(0);
  const [playerTwoCard, setPlayerTwoCard] = useState(0);

  //fetch new shuffled deck for each player from API
  useEffect(() => {
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(response => response.json())
      .then(json => setPlayerOne({ deck: json }))
      .catch(error => {
        console.log('Received an error when fetching a new deck!');
        console.error(error);
      });

    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(response => response.json())
      .then(json => setPlayerTwo({ deck: json }))
      .catch(error => {
        console.log('Received an error when fetching a new deck!');
        console.error(error);
      });
  }, []); // PS: semicolon
  function handleStartGameButtonClick() {
    // PS: weird spacing
    setStartGame(!startGame);
  }

  function handleWarButtonClick() {
    //draw card from each player's deck
    //check the higher card
    //set new score

    fetch(
      `https://deckofcardsapi.com/api/deck/${playerOne.deck.deck_id}/draw/?count=1`
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setPlayerOneCard(parseInt(json.cards[0].value));
      }) // PS: wrong score for face cards
      .catch(error => {
        console.log('Received an error when drawing a card from the deck!');
        console.error(error);
      });

    fetch(
      `https://deckofcardsapi.com/api/deck/${playerTwo.deck.deck_id}/draw/?count=1`
    )
      .then(response => response.json())
      .then(json => setPlayerTwoCard(parseInt(json.cards[0].value)))
      .catch(error => {
        console.log('Received an error when drawing a card from the deck!');
        console.error(error);
      });

    if (playerOneCard > playerTwoCard) {
      setPlayerOneScore(prevScore => prevScore + 1);
    }
    if (playerTwoCard > playerOneCard) {
      setPlayerTwoScore(prevScore => prevScore + 1);
    } //else it's a draw (no one scores a point)
    setRemaining(prevValue => prevValue - 1);
  }

  return (
    <div>
      <h1>Game in Progress</h1>
      <button
        type="button"
        disabled={startGame}
        onClick={() => handleStartGameButtonClick()}
      >
        Start Game
      </button>
      <button
        type="button"
        disabled={!startGame}
        onClick={() => handleStartGameButtonClick()}
      >
        End Game
      </button>
      <br />
      {startGame && (
        <GameRecord
          remaining={remaining}
          playerOneScore={playerOneScore}
          playerTwoScore={playerTwoScore}
        />
      )}
      <button type="button" onClick={() => handleWarButtonClick()}>
        We Declare War!
      </button>
    </div>
  );
}
