import React, { useState } from "react";
import {CapitalizeAllWords} from '../Utilities/UtilityFunctions'

function CogsForm() {
  const [input, setInput] = useState();

  const handleChange = (e) =>
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

  const salesCategories = ["food", "beverage", "other"];

  const renderCategories = () => {
    return salesCategories.map((category) => {
      return (
        <option value={category} onChange={(e) => handleChange(e)} key={category}>
          {CapitalizeAllWords(category)}
        </option>
      );
    });
  };

  return (
    <main className="main">
      <form className="form">
        <fieldset>
        <legend className="legend">COGS</legend>
          <section className="input-container input-container_col-3">
            <label htmlFor="category">Category</label>
            <select className="input-container__input" id="category">
              {renderCategories()}
            </select>
          </section>

          <section className="input-container input-container_col-3">

            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              className="input-container__input"
            />

            <div className="toggle-container toggle-container_3-col">
              <label htmlFor="dollars">
                <input
                  className="toggle-container__input"
                  type="radio"
                  name="days"
                  id="dollars"
                  value="dollars"
                />
                <div className="toggle-container__box">
                  <p>$</p>
                </div>
              </label>

              <label htmlFor="percentage">
                <input
                  className="toggle-container__input"
                  type="radio"
                  name="days"
                  id="percentage"
                  value="percentage"
                />
                <div className="toggle-container__box">
                  <p>%</p>
                </div>
              </label>

            </div>
            </section>

          <section className="button-container">
            <button className="button button-container__button button_delete">
              Delete
            </button>
            <input
              className="button button-container__button button_save"
              type="submit"
              value="Save"
            />
          </section>
        </fieldset>
      </form>
    </main>
  );
}

export default CogsForm;
