import React from "react";
import CategoryTotal from "../CategoryTotal/CategoryTotal";

function KpiTotal(props) {
  const getPercentage = () => {
    return parseFloat((props.amount / props.salesTotal) * 100).toFixed(2);
  };
  return (
    <fieldset className="fieldset fieldset_pl">
      <legend className="fieldset__legend">
        <h2 className="fieldset__header">{props.name}</h2>
      </legend>
      <CategoryTotal
        name={props.name}
        amount={parseFloat(props.amount).toFixed(2)}
        numberSymbol="$"
        class="fieldset__item-container_kpi"
      />
      <CategoryTotal
        name={props.name}
        amount={getPercentage()}
        numberSymbol="%"
        class="fieldset__item-container_kpi"
      />
    </fieldset>
  );
}

export default KpiTotal;
