import React from "react";
import { API_GET } from "../Utilities/API_Methods/API_GET";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import EmptyList from "../EmptyList/EmptyList";
import RolesListItem from "../RolesListItem/RolesListItem";

function RolesListContainer() {
  const [{ data, isLoading, isError }] = API_GET("roles");

  const renderLoading = () => {
    return <LoadingIndicator />;
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
        {data[0].length === 0 ? renderEmptyList() : renderDepartments()}
      </section>
    );
  };

  const renderEmptyList = () => {
    return <EmptyList name="role" />;
  };

  const renderDepartments = () => {
    const collatedData = collateDataByDept();
    let departments = [];
    for (const property in collatedData) {
      departments.push(property);
    }
    departments.sort();
    return departments.map((key) => {
      return (
        <RolesListItem
          department={key}
          roles={collatedData[key].roles}
          key={key}
        />
      );
    });
  };

  const collateDataByDept = () => {
    let collatedData = {};
    data[0].forEach((item) => {
      !collatedData[item.department_name]
        ? (collatedData[item.department_name] = { roles: [item] })
        : collatedData[item.department_name].roles.push(item);
    });
    return collatedData;
  };

  return (
    <main className="main">
      <fieldset className="fieldset fieldset_roles">
        <legend className="fieldset__legend">
          <h2 className="fieldset__header">Roles</h2>
        </legend>
        {isLoading ? renderLoading() : renderResults()}
      </fieldset>
    </main>
  );
}

export default RolesListContainer;
