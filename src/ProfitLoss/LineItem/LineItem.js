import React from "react";
import { Link } from "react-router-dom";
import LineItemAmount from "../LineItemAmount/LineItemAmount";

function LineItem(props) {
  const getLink = () => {
    return props.line_item_category === "direct_labor"
      ? `/schedule`
      : `form/line-item/${props.line_item_id}`;
  };

  return (
    <Link
      className="fieldset__item-container fieldset__item-container_line-item"
      to={getLink()}
    >
      <p className="fieldset__item-text">{props.name}</p>
      <LineItemAmount amount={props.amount} numberSymbol={props.numberSymbol} />
    </Link>
  );
}

export default LineItem;
