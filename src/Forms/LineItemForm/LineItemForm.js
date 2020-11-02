import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { CapitalizeAllWords } from "../../Utilities/UtilityFunctions";
import CogsOptions from './CogsOptions'; 


//Below is resource for fetching data and working with state and hooks
//https://www.carlrippon.com/drop-down-data-binding-with-react-hooks/

function LineItemForm() {
  const [input, setInput] = useState({ amountType: "dollars" });

  const params = useParams();

  const handleChange = (e) =>
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

  const expenseCategories = ["sales", "cogs", "overhead"];

  const renderCategories = (categories) => {
    return categories.map((category) => {
      return (
        <option value={category} key={category}>
          {CapitalizeAllWords(category)}
        </option>
      );
    });
  };

  return (
    <main className="main">   
      <form className="form">
        <fieldset className="fieldset_form">
            <section className="input-container">
              <label htmlFor="category">Category</label>
              <select
                defaultValue={params.category}
                className="input-container__input"
                id="category"
                onChange={(e) => handleChange(e)}
                name="category"
                value={input.category}
              >
                {renderCategories(expenseCategories)}
              </select>
            </section>
          <section className="input-container">
            <label htmlFor="line-item">Line Item</label>
            <input
              className="input-container__input"
              type="text"
              id="line-item"
              placeholder="Line Item Name"
              name="name"
              onChange={(e) => handleChange(e)}
              value={input.name}
            />
          </section>
          <section className="input-container">
            <label htmlFor="amount">Amount</label>
            <input
              className="input-container__input"
              type="text"
              id="amount"
              placeholder="5,000"
              name="amount"
              value={input.amount}
              onChange={(e) => handleChange(e)}
            />
          </section>
          {input.category === "cogs" ? <CogsOptions amountType = {input.amountType} onChange={e => handleChange(e)}/> : null}
          <section className="button-container">
            <button className="button button-container__button button_delete">
              Delete
            </button>
            <button
              className="button button-container__button button_save"
              type="submit"
              value="Save"
            >
              Save
            </button>
          </section>
        </fieldset>
      </form>
    </main>
  );
}

export default LineItemForm;
