import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import GameOver from "./components/GameOver.jsx";
import Log from "./components/Log.jsx";

import { WINNING_COMBINATIONS } from "./winning-combination.js";
//create 2D array
const row = 3;
const column = 3;
const initialGameBoard = Array(row)
  .fill()
  .map(() => Array(column).fill(null));

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}
function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const [playerName, setPlayerName] = useState({ X: "Player 1", O: "Player2" });
  // const [activePlayer, setActivePlayer] = useState("X");
  let gameBoard = [...initialGameBoard.map((array) => [...array])];
  const activePlayer = deriveActivePlayer(gameTurn);
  let winner;
  let draw;
  draw = gameTurn.length === 9 && !winner;

  for (const turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  for (const cobination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[cobination[0].row][cobination[0].column];
    const seconedSquareSymbol =
      gameBoard[cobination[1].row][cobination[1].column];
    const thirdSquareSymbol =
      gameBoard[cobination[2].row][cobination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === seconedSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = playerName[firstSquareSymbol];
    }
  }
  function selectSquareHandler(rowIndex, colIdex) {
    // setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));

    setGameTurn((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIdex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }
  function resetGameHandler() {
    setGameTurn([]);
  }

  function changePlayernameHandler(symbol, newName) {
    setPlayerName((playerName) => {
      return { ...playerName, [symbol]: newName };
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="player 1"
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={changePlayernameHandler}
          />
          <Player
            initialName="player 2"
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={changePlayernameHandler}
          />
        </ol>
        {(winner || draw) && (
          <GameOver winner={winner} onResetGame={resetGameHandler} />
        )}
        <GameBoard onSelectSquare={selectSquareHandler} board={gameBoard} />
      </div>

      <div>
        <Log turns={gameTurn} />
      </div>
    </main>
  );
}

export default App;
