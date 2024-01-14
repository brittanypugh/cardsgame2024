import PlayerInfo from "./PlayerInfo";

export default function GameRecord() {

    return (
        <div>
        <PlayerInfo player="playerOne" score={0} deck={[]} />
        <hr />
        <PlayerInfo player="playerTwo" score={0} deck={[]} />

        </div>
    );
}