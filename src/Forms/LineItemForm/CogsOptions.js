import React from "react";
import {CapitalizeAllWords} from '../../Utilities/UtilityFunctions'

function CogsOptions(props) {
  const salesCategories = ["food", "beverage", "other"];

  const renderCategories = (categories) => {
    return categories.map((category) => {
      return (
        <option value={category} key={category} >
          {CapitalizeAllWords(category)}
        </option>
      );
    });
  };

  const renderCogsPercentageOptions = () => {
    return (
      <section className="input-container">
        <label htmlFor="percentOf">Percent Of</label>
        <select
          className="input-container__input"
          id="percentOf"
          onChange={(e) => props.onChange(e)}
          name="percentOf"
          value={props.percentOf}
          defaultValue={''}
        >
          <option value={''} disabled></option>
          {renderCategories(salesCategories)}
        </select>
      </section>
    );
  };

  return (
    <>
      <section className="input-container">
        <p>Amount Type</p>
        <div className="input-container__radio input-container__input">
          <div>
            <input
              type="radio"
              name="amountType"
              id="dollars"
              value="dollars"
              checked={props.amountType === "dollars"}
              onChange={(e) => props.onChange(e)}
            />
            <label htmlFor="dollars">Dollars</label>
          </div>
          <div>
            <input
              type="radio"
              name="amountType"
              id="percentage"
              value="percentage"
              checked={props.amountType === "percentage"}
              onChange={(e) => props.onChange(e)}
            />
            <label htmlFor="percentage">Percent</label>
          </div>
        </div>
      </section>
      {props.amountType === 'percentage' ? renderCogsPercentageOptions() : null}
    </>
  );
}

export default CogsOptions;
