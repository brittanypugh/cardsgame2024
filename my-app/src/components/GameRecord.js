import PlayerInfo from "./PlayerInfo";

export default function GameRecord({playerOne, playerTwo}) {

    return (
        <div>
        <PlayerInfo name={playerOne.name} score={playerOne.score} deck={playerOne.deck} />
        <hr />
        <PlayerInfo name={playerTwo.name} score={playerTwo.score} deck={playerTwo.deck} />

        </div>
    );
}