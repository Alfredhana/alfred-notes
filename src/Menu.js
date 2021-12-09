import React, { useState } from "react";
import { nanoid } from "nanoid";
const Menu = ({ handleChangeState }) => {
  const ChangeState = (currentState) => {
    handleChangeState(currentState);
  };
  return (
    <div>
      <h2>Alfred is developing React Applications</h2>
      <ul>
        <li>
          <button
            id={nanoid()}
            variant="primary"
            className="btn-primary"
            onClick={() => ChangeState("note")}
          >
            Alfred note
          </button>
        </li>
        <li>
          <button
            id={nanoid()}
            variant="primary"
            className="btn-primary"
            onClick={() => ChangeState("budget")}
          >
            Alfred budget
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
