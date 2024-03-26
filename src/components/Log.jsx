import "./Log.css";

export default function Log({ turns, players }) {
  return (
    <ol id="log" className="log-container">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`} className="log-entry">
          <span className={`player ${turn.player.toLowerCase()}`}>
            {players[turn.player].toUpperCase()}
            <span className="player-symbol">{turn.player}</span>
          </span>
          selected {turn.square.row + 1}, {turn.square.col + 1}
        </li>
      ))}
    </ol>
  );
}
