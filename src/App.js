import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { AppProvider } from "./context/AppContext";
import ExpenseTotal from "./components/ExpenseTotal";
import CategoryExpenses from "./components/CategoryExpenses";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1>Expense Manager</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
        <br />
        <h3 className="mt-3">Company Category Expenses</h3>
        <div className="row ">
          <div className="col-sm">
            <CategoryExpenses />
          </div>
        </div>
        <br />
        <h3 className="mt-3">User Expenses</h3>
        <div className="row ">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3">Add Expense</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
