import React, { useState } from "react";
import {CapitalizeAllWords} from '../Utilities/UtilityFunctions'

function CogsForm() {

    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [amountType, setAmountType] = useState('');
    
//   const [input, setInput] = useState({amount: '', category: '', amountType: ''});

//   const handleChange = (e) =>
//     setInput({
//       ...input,
//       [e.target.name]: e.target.value,
//     });

  const salesCategories = ["food", "beverage", "other"];

  const renderCategories = () => {
    return salesCategories.map((category) => {
      return (
        <option value={category} key={category}>
          {CapitalizeAllWords(category)}
        </option>
      );
    });
  };

  return (
      
    <main className="main" id='test'>
      <form className="form">
        <fieldset>
        <legend className="legend">COGS</legend>
          <section className="input-container input-container_col-3">
            <label htmlFor="category">Category</label>
            <select className="input-container__input" id="category" onChange={(e) => setCategory(e.target.value)} name='category'>
              {renderCategories()}
            </select>
            </section>

          <section className="input-container input-container_col-3">

            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              className="input-container__input"
              name='amount'
              onChange={e => setAmount(e.target.value)}
            />
            <div className="toggle-container toggle-container_3-col">
              <label htmlFor="dollars">
                <input
                  className="toggle-container__input"
                  type="radio"
                  name="amountType"
                  id="dollars"
                  value="dollars"
                  checked ={amountType === 'dollars'}
                  onChange={e => setAmountType(e.target.value)}
                />
                <div className="toggle-container__box">
                  <p>$</p>
                </div>
              </label>

              <label htmlFor="percentage">
                <input
                  className="toggle-container__input"
                  type="radio"
                  name="amountType"
                  id="percentage"
                  value="percentage"
                  checked ={amountType === 'percentage'}
                  onChange={e => setAmountType(e.target.value)}
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
