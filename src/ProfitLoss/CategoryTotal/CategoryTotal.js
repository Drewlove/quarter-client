import React from "react";
import LineItemAmount from "../LineItemAmount/LineItemAmount";

function CategoryTotal(props) {
  const getPercentageOf = (sales) => {
    if (props.netProfit && sales) {
      let percentage = ((sales - props.categoryTotal) / sales) * 100;
      return `${percentage.toFixed(2)}%`;
    } else if (sales) {
      let percentage = (props.categoryTotal / sales) * 100;
      return `${percentage.toFixed(2)}%`;
    }
  };

  return (
    <div className="fieldset__item-container fieldset__item-container_total">
      <p className="fieldset__item-text">{props.name}</p>
      <LineItemAmount amount={parseFloat(props.categoryTotal).toFixed(2)} />
      <p className="fieldset__item-text">{getPercentageOf(props.salesTotal)}</p>
    </div>
  );
}

export default CategoryTotal;
