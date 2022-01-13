import React, { useContext, useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

  useEffect(() => {
    setfilteredExpenses(expenses);
  }, [expenses]);

  return (
    <>
      <ul className="list-group mt-3 mb-3">
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            name={expense.name}
            category={expense.category}
            description={expense.description}
            cost={expense.cost}
          />
        ))}
      </ul>
    </>
  );
};

export default ExpenseList;
