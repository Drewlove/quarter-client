import React from "react";
import { Link } from "react-router-dom";
import LineItemAmount from "../LineItemAmount/LineItemAmount";

function LineItem(props) {
  const getLink = () => {
    return props.line_item_category === "direct labor"
      ? `/schedule/`
      : `form/line-item/${props.line_item_id}`;
  };

  return (
    <Link className="fieldset__item-container" to={getLink()}>
      <p className="fieldset__item-text">{props.name}</p>
      <LineItemAmount amount={props.amount} />
    </Link>
  );
}

export default LineItem;
