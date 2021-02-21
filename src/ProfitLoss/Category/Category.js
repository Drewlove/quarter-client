import React from "react";
import LineItem from "../LineItem/LineItem";
import CategoryTotal from "../CategoryTotal/CategoryTotal";

function Category(props) {
  const renderLineItems = () => {
    return props.lineItems.map((key) => {
      return (
        <LineItem
          category={key.line_item_category}
          name={key.line_item_name}
          amount={key.amount}
          id={key.line_item_id}
          key={key.line_item_id}
          numberSymbol="$"
        />
      );
    });
  };

  const renderCategoryTotalPercentage = () => {
    const percentageAmount = (props.amount / props.salesTotal) * 100;
    return (
      <CategoryTotal
        name={props.name}
        amount={percentageAmount}
        numberSymbol="%"
        class="fieldset__item-container_total"
      />
    );
  };

  return (
    <fieldset className="fieldset fieldset_pl fieldset_pl-category">
      <legend className="fieldset__legend">
        <h2 className="fieldset__header">{props.name}</h2>
      </legend>
      {renderLineItems()}
      <CategoryTotal
        name={props.name}
        amount={props.amount}
        numberSymbol="$"
        class="fieldset__item-container_total"
      />
      {props.name !== "Sales" ? renderCategoryTotalPercentage() : null}
    </fieldset>
  );
}

export default Category;
