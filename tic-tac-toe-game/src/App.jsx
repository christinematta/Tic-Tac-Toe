import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  function selectSquareHandler() {
    setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="player 2" symbol="O" isActive={activePlayer === '0'}/>
        </ol>
        <GameBoard onSelectSquare={selectSquareHandler} activePlayerSymbol={activePlayer}/>
      </div>
    </main>
  );
}

export default App;
