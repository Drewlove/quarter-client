import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Departments() {
  const departments = [
    { name: "kitchen", id: 1 },
    { name: "service", id: 2 },
    { name: "production", id: 3 },
  ];

  const renderDepartments = () => {
    return departments.map((key) => {
      return (
        <Link
          className="fieldset__item-container"
          key={key.id}
          to={`/forms/departments/${key.id}`}
        >
          {key.name}
        </Link>
      );
    });
  };

  return (
    <main className="main">
      <fieldset className="fieldset">
        <legend className="fieldset__legend">
          <h2 className="fieldset__header">Departments</h2>
        </legend>
        {renderDepartments()}
      </fieldset>
    </main>
  );
}

export default Departments;
