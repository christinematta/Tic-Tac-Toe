export default function GameOver({winner, onResetGame}) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
     {!winner ? <p> its a draw</p>: <p>{winner} Won!</p>}
      <button onClick={onResetGame}>Rematch</button>
    </div>
  );
}
