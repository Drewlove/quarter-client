import React from "react";
import { Link } from "react-router-dom";

function RolesListItem(props) {
  const renderRoles = () => {
    return props.roles.map((key) => {
      return (
        <Link
          key={key.role_id}
          className="fieldset__item-container"
          to={`/form/role/${key.role_id}`}
        >
          <span className="fieldset__item-text">{key.role_name}</span>
        </Link>
      );
    });
  };

  return (
    <section className="roles-list-item">
      <div className="roles-list-item__department">{props.department}</div>
      <div className="roles-list-item__container">{renderRoles()}</div>
    </section>
  );
}

export default RolesListItem;
