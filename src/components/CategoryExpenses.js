import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const CategoryExpenses = () => {
  const { expenses } = useContext(AppContext);

  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    let categories = ["Food", "Supplies", "Travel"];

    let data = [];

    categories.forEach((catg) => {
      let filter = expenses.filter(
        (item) => item.category.toLowerCase() === catg.toLowerCase()
      );
      data.push({ category: catg, total: addTotal(filter) });
    });

    setCategoryData(data);
  }, [expenses]);

  const addTotal = (_list) => {
    return _list.reduce((total, item) => {
      return (total += item.cost);
    }, 0);
  };

  // console.log(categoryData);

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center text-center">
      {categoryData.map((item, i) => (
        <div key={i}>
          <div>
            <strong>{item.category}</strong>
          </div>
          <div>{item.total}</div>
        </div>
      ))}
    </li>
  );
};

export default CategoryExpenses;
