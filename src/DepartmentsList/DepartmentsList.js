import React from "react";
import { Link } from "react-router-dom";
import EmptyList from "../EmptyList/EmptyList";

function DepartmentsList(props) {
  const renderContainer = () => {
    return (
      <section className="fieldset__container">
        {props.data[0].length === 0
          ? renderEmptyList()
          : renderDepartmentsList()}
      </section>
    );
  };

  const renderEmptyList = () => {
    return <EmptyList name="department" />;
  };

  const renderDepartmentsList = () => {
    return props.data[0].map((key) => {
      return (
        <Link
          className="fieldset__item-container"
          key={key.department_id}
          to={`/form/department/${key.department_id}`}
        >
          <span className="fieldset__item-text">{key.department_name}</span>
        </Link>
      );
    });
  };

  return (
    <>
      <fieldset className="fieldset fieldset_departments">
        <legend className="fieldset__legend">
          <h2 className="fieldset__header">Departments</h2>
        </legend>
        {renderContainer()}
      </fieldset>
    </>
  );
}

export default DepartmentsList;
