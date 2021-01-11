import React from "react";
import { API_GET } from "../Utilities/API_Methods/API_GET";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import EmptyList from "../EmptyList/EmptyList";
import RolesListItem from "../RolesListItem/RolesListItem";

function Roles() {
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
        {data.length === 0 ? renderEmptyList() : renderDepartments()}
      </section>
    );
  };

  const renderEmptyList = () => {
    return <EmptyList name="role" />;
  };

  const renderDepartments = () => {
    const collatedData = collateDataByDept();
    return Object.entries(collatedData).map(([key, value]) => {
      return (
        <RolesListItem
          department={key}
          roles={value.roles}
          key={value.roles[0].department_id}
        />
      );
    });
  };

  const collateDataByDept = () => {
    let collatedData = {};
    data.forEach((item) => {
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

export default Roles;
