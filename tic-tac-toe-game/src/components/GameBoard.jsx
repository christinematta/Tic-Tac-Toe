import { useState } from "react";

//Create 2D array
const row = 3;
const column = 3;
const initialGameBoard = Array(row)
  .fill()
  .map(() => Array(column).fill(null));

export default function GameBoard({ onSelectSquare, turns }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function clickHandler(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedGameBoard = [...prevGameBoard].map((innerArray) => [
  //       ...innerArray,
  //     ]);
  //     console.log(updatedGameBoard[rowIndex][colIndex]);
  //     updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedGameBoard;
  //   });
  //   onSelectSquare();
  // }

  let gameBoard = initialGameBoard;

  for (const turn of turns){
    const {square, player} =turn;
    const {row, col} = square;
    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, columnIndex) => (
              <li key={columnIndex}>
                <button onClick={() => onSelectSquare(rowIndex,columnIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
