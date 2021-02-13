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

  const renderKpiInfo = () => {
    return (
      <CategoryTotal
        name={props.kpiName}
        categoryTotal={props.kpiNum}
        salesTotal={props.salesTotal}
      />
    );
  };

  return (
    <fieldset className="fieldset fieldset_pl">
      <legend className="fieldset__legend">
        <h2 className="fieldset__header">{props.name}</h2>
      </legend>
      {renderLineItems()}
      <CategoryTotal name={props.name} categoryTotal={props.categoryTotal} />
      {props.kpiName ? renderKpiInfo() : null}
    </fieldset>
  );
}

export default Category;
