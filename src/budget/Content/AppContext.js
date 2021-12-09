import { createContext, useReducer, useEffect } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case "SET_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };
    case "SET_EXPENSES":
      return {
        ...state,
        expenses: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  budget: 1200,
  expenses: [
    { id: 12, name: "shopping", cost: 40 },
    { id: 13, name: "holiday", cost: 400 },
    { id: 14, name: "car service", cost: 50 },
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("budget-app-data"));
    console.log(savedData);
    if (savedData) {
      //dispatch({ type: "SET_EXPENSES", savedData });
      dispatch({ type: "SET_BUDGET", payload: savedData.budget });
      dispatch({ type: "SET_EXPENSES", payload: savedData.expenses });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("budget-app-data", JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider
      value={{ budget: state.budget, expenses: state.expenses, dispatch }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
