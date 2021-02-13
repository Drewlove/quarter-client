import React from "react";
import LineItem from "../LineItem/LineItem";
import CategoryTotal from "../CategoryTotal/CategoryTotal";

function Category(props) {
  const renderLineItems = () => {
    return props.lineItems.map((key) => {
      return (
        <LineItem
          category={key.category}
          name={key.line_item_name}
          amount={key.amount}
          id={key.line_item_id}
          key={key.line_item_id}
        />
      );
    });
  };

  const getPercentageOf = () => {
    if (props.netProfit && props.salesTotal) {
      let percentage =
        ((props.salesTotal - props.categoryTotal) / props.salesTotal) * 100;
      return `${percentage.toFixed(2)}%`;
    } else if (props.salesTotal) {
      let percentage = (props.kpiNum / props.salesTotal) * 100;
      return `${percentage.toFixed(2)}%`;
    }
  };

  const renderKpiInfo = () => {
    return (
      <>
        <CategoryTotal
          name={props.kpiName}
          categoryTotal={props.kpiNum}
          numberSymbol="$"
          class="fieldset__item-container_kpi"
        />
        <CategoryTotal
          name={props.kpiName}
          categoryTotal={getPercentageOf()}
          numberSymbol="%"
          class="fieldset__item-container_kpi"
        />
      </>
    );
  };

  return (
    <fieldset className="fieldset fieldset_pl">
      <legend className="fieldset__legend">
        <h2 className="fieldset__header">{props.name}</h2>
      </legend>
      {renderLineItems()}
      <CategoryTotal
        name={props.name}
        categoryTotal={props.categoryTotal}
        numberSymbol="$"
        class=""
      />
      {props.kpiName ? renderKpiInfo() : null}
    </fieldset>
  );
}

export default Category;
