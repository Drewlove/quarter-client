import React, { useState } from "react";

function LineItemForm() {
  const [input, setInput] = useState();

  const handleChange = (e) =>
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

  return (
    <main className="main">
      <form className="form">
        <fieldset className="fieldset_form">
          <legend>Sales</legend>
          <section className="input-container">
            <label htmlFor="line-item">Line Item</label>
            <input
              className="input-container__input"
              type="text"
              id="line-item"
              placeholder="Line Item Name"
              name="name"
              onChange={(e) => handleChange(e)}
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
              onChange={(e) => handleChange(e)}
            />
          </section>

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
