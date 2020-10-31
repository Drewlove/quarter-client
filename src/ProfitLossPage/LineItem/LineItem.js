import React from "react";
import { BrowserRouter, Link} from "react-router-dom";
import { CapitalizeAllWords } from "../../Utilities/UtilityFunctions";
import { Hyphenate } from "../../Utilities/UtilityFunctions";

function LineItem(props) {
  return (
      <Link
        className="pl-fieldset__item-container"
        to={`/form/${Hyphenate(props.category)}/${Hyphenate(props.name)}`}
      >
        <p className="pl-fieldset__item-text">
          {CapitalizeAllWords(props.name)}
        </p>
        <p className="pl-fieldset__item-text">
          {props.amount.toLocaleString()}
        </p>
      </Link>
  );
}

export default LineItem;
