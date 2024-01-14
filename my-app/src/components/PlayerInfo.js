export default function PlayerInfo({player, score, deck}) {

    return (
        <div>
            <h2>{player}</h2>
            <p>{player}'s current score is: {score}</p>
            <p> the deck is {deck}</p>
        </div>
    );
}