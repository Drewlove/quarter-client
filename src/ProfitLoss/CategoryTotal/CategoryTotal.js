import React from "react";
import LineItemAmount from "../LineItemAmount/LineItemAmount";

function CategoryTotal(props) {
  return (
    <>
      <div className={`fieldset__item-container ${props.class}`}>
        <p className="fieldset__item-text">{props.name}</p>
        <LineItemAmount
          amount={parseFloat(props.amount).toFixed(2)}
          numberSymbol={props.numberSymbol}
        />
      </div>
    </>
  );
}

export default CategoryTotal;
