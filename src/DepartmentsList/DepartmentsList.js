import React from "react";
import { Link } from "react-router-dom";
import { API_GET } from "../Utilities/API_Methods/API_GET";
import EmptyList from "../EmptyList/EmptyList";

function DepartmentsList() {
  const [{ data, isLoading, isError }] = API_GET("departments");

  const renderLoading = () => {
    return <p>Loading...</p>;
  };

  const renderResults = () => {
    return isError ? renderError() : renderContainer();
  };

  const renderError = () => {
    return <p>Error!</p>;
  };

  const renderContainer = () => {
    return (
      <section className="fieldset__container">
        {data.length === 0 ? renderEmptyList() : renderDepartmentsList()}
      </section>
    );
  };

  const renderEmptyList = () => {
    return <EmptyList name="department" />;
  };

  const renderDepartmentsList = () => {
    return data.map((key) => {
      return (
        <Link
          className="fieldset__item-container"
          key={key.department_id}
          to={`/form/department/${key.department_id}`}
        >
          {key.department_name}
        </Link>
      );
    });
  };

  return (
    <main className="main">
      <fieldset className="fieldset fieldset_departments">
        <legend className="fieldset__legend">
          <h2 className="fieldset__header">Departments</h2>
        </legend>
        {isLoading ? renderLoading() : renderResults()}
      </fieldset>
    </main>
  );
}

export default DepartmentsList;
