import React from "react";

function CogsOptions(props) {
//const salesCategories = ['food', 'beverage', 'other']


// const renderCogsPercentageOptions = () => {
//     return (
//       <section className="input-container">
//         <label htmlFor="category">Category</label>
//         <select
//           defaultValue={params.category}
//           className="input-container__input"
//           id="category"
//           onChange={(e) => handleChange(e)}
//           name="category"
//         >
//           {renderCategories(expenseCategories)}
//         </select>
//       </section>
//     );
//   };

  return (
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
            onChange={e => props.onChange(e)}
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
            onChange={e => props.onChange(e)}
          />
          <label htmlFor="percentage">Percentage</label>
        </div>
      </div>
    </section>
  );
}

export default CogsOptions;
