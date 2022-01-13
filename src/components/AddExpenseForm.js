import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpenseForm = (props) => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Food");
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const expense = {
      id: uuidv4(),
      name,
      category,
      description,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    setName("");
    setCategory("Food");
    setDescription("");
    setCost("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm col-lg-3">
          <label htmlFor="name">Full Name</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="col-sm col-lg-3">
          <label htmlFor="category">Category</label>
          <select
            required="required"
            type="text"
            className="form-control"
            value={category}
            id="category"
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="Food">Food</option>
            <option value="Supplies">Supplies</option>
            <option value="Travel">Travel</option>
          </select>
        </div>

        <div className="col-sm col-lg-3">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            required="required"
            type="text"
            value={description}
            id="description"
            rows="1"
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
        </div>
        <div className="col-sm col-lg-3">
          <label htmlFor="cost">Cost</label>
          <input
            required="required"
            type="number"
            className="form-control"
            id="cost"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
