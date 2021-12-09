import React, { useContext, useState } from "react";
import { AppContext } from "./Content/AppContext";
const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const [value, setValue] = useState(0);
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleSaveClick = (value) => {
    dispatch({ type: "SET_BUDGET", payload: value });
    setIsEditing(false);
  };
  return (
    <div className="alert alert-secondary d-flex justify-content-between align-items-center">
      {isEditing ? (
        <>
          <input
            required="required"
            type="number"
            className="form-control mr-3"
            id="name"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleSaveClick(value)}
          >
            Save
          </button>
        </>
      ) : (
        <>
          <span>Budget: £{budget}</span>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleEditClick}
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default Budget;
