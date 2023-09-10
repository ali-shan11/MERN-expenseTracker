import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial State

const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

//createContext: Create Context object that contains the state of the application
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
  //useReducer: manage the state of the application, accepts 2 arguments (reducerFunction, initialState)
  // The reducer function is used change the state when the action is dispatched
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: "Add_TRANSACTION",
      payload: transaction,
    });
  }

  //the object in the value is returned to the App.js file or in the file where the GlobalProvider is used
  //the children are the Components that are present in the GlobalProvider i.e. where the GlobalProvider is used
  //in this case I am using the GlobalProvider in the App.js so every component in the file is passed as the children
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
