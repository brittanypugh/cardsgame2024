export default function PlayerInfo({ name, score, remaining }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>
        {name}'s current score is: {score}
      </p>
      <p>Cards remaining in the deck: {remaining}</p>
    </div>
  );
}
