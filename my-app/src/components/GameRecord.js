import PlayerInfo from './PlayerInfo';

export default function GameRecord({
  remaining,
  playerOneScore,
  playerTwoScore,
}) {
  return (
    <div>
      <PlayerInfo
        name="Player One"
        score={playerOneScore}
        remaining={remaining}
      />
      <hr />
      <PlayerInfo
        name="Player Two"
        score={playerTwoScore}
        remaining={remaining}
      />
    </div>
  );
}
