import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditting, setIsEditting] = useState(false);

  function editClickHandler() {
    setIsEditting((editting) => !editting);

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
          <input type="text" defaultValue={name}required/>
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editClickHandler}>{isEditting ? "Save" : "Edit"}</button>
    </li>
  );
}
