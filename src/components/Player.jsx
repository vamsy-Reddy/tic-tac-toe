import React, { useState } from "react";

export const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    //when we are updating the state using the previous state value we need to use the callback function. As this gurantees that the value we are using is the latest value of the state.
    setIsEditing((prevState) => !prevState);
  };
  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input type="text" required value={name} />
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};
