import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  //useContext is used to get the context in the file
  //the context which was made globally using the createContext hook
  //Note: It is necessary to first use the GlobalProvider in the parent component
  const { transactions } = useContext(GlobalContext);
  //in the above line transactions is received from the context object which was present in the value props

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">
            -${expense}
          </p>
        </div>
      </div>
    </div>
  );
};
