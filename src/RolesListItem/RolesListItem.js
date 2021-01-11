import React from "react";
import { Link } from "react-router-dom";

function RolesListItem(props) {
  const renderRoles = () => {
    console.log(props.roles);
    return props.roles.map((key) => {
      return (
        <Link
          id={key.role_id}
          className="fieldset__item-container"
          to={`/form/role/${key.role_id}`}
        >
          {key.role_name}
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
