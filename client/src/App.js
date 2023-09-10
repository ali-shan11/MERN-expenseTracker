import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddList } from "./components/AddList";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div>
        <Header />
        <div className={"container"}>
          <Balance />
        </div>
        <IncomeExpenses />
        <TransactionList />
        <AddList />
      </div>
    </GlobalProvider>
  );
}

export default App;
