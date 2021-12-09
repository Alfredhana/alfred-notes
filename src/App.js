import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import NoteApp from "./note/NoteApp";
import Menu from "./Menu";
import BudgetApp from "./budget/BudgetApp";

const App = () => {
  const [state, setState] = useState("home");
  const returnHome = () => {
    console.log("clicked");
    setState("home");
  };
  return (
    <div>
      {/* {state === "home" && <Menu handleChangeState={setState} />}
       {state === "note" && <NoteApp handleReturn={returnHome} />}
       {state === "budget" && <BudgetApp handleReturn={returnHome} />} */}
      <BudgetApp handleReturn={returnHome} />
    </div>
  );
};

export default App;
