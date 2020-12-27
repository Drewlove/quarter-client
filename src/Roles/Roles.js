import React from "react";
import { Link } from "react-router-dom";

function Roles() {
  const departments = [
    { name: "chef", id: 1 },
    { name: "sous chef", id: 2 },
    { name: "service lead", id: 3 },
    { name: "service", id: 4 },
    { name: "doughs", id: 5 },
  ];

  const renderRoles = () => {
    return departments.map((key) => {
      return (
        <Link
          className="fieldset__item-container"
          key={key.id}
          to={`/form/role/${key.id}`}
        >
          {key.name}
        </Link>
      );
    });
  };

  return (
    <main className="main">
      <fieldset className="fieldset fieldset_roles">
        <legend className="fieldset__legend">
          <h2 className="fieldset__header">Roles</h2>
        </legend>
        {renderRoles()}
      </fieldset>
    </main>
  );
}

export default Roles;
