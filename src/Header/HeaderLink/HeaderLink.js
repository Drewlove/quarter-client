import React from "react";
import { Link } from "react-router-dom";

function HeaderLink(props) {
  return (
    <Link
      to={props.url}
      className="header__new-menu-link"
      onClick={() => props.toggleMenuDisplay()}
    >
      {props.text}
    </Link>
  );
}

export default HeaderLink;
