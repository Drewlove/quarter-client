import React from "react";
import { Link } from "react-router-dom";

function HeaderLink(props) {
  return (
    <Link
      to={props.url}
      className={`header__link${props.className ? ` ${props.className}` : ""}`}
      onClick={() => props.toggleMenuDisplay()}
    >
      {props.text}
    </Link>
  );
}

export default HeaderLink;
