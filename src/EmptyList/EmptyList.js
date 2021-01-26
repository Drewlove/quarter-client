import React from "react";
import { Link } from "react-router-dom";
import { CapitalizeAllWords } from "../Utilities/UtilityFunctions";

function EmptyList(props) {
  return (
    <div className="empty-list">
      <p className="empty-list__text">No {props.name}s found.</p>
      <div className="empty-list__link-container">
        <Link className="empty-list__link" to={props.url}>
          Add {CapitalizeAllWords(props.name)}
        </Link>
      </div>
    </div>
  );
}

export default EmptyList;
