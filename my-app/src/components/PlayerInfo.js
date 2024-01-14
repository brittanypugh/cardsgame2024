export default function PlayerInfo({name, score, deck}) {

    return (
        <div>
            <h2>{name}</h2>
            <p>{name}'s current score is: {score}</p>
            <p>Cards remaining in the deck: {deck.remaining}</p>
        </div>
    );
}