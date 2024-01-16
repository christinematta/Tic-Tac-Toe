import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditting, setIsEditting] = useState(false);

  function editClickHandler() {
    setIsEditting((editting) => !editting);
  }
  function inputChangeHandler(event) {
    setPlayerName(event.target.value);
  }
  // let playerName = <span className="player-name">{name}</span>
  // if(isEditting){
  //   playerName = <input type="text" required/>
  // }

  return (
    <li>
      <span className="player">
        {/* {playerName} */}
        {isEditting ? (
          <input
            type="text"
            value={playerName}
            required
            onChange={inputChangeHandler}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editClickHandler}>{isEditting ? "Save" : "Edit"}</button>
    </li>
  );
}
