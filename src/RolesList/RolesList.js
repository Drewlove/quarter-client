import React from "react";
import RolesListItem from "../RolesListItem/RolesListItem";
import EmptyList from "../EmptyList/EmptyList";

function RolesList(props) {
  const renderContainer = () => {
    return (
      <section className="fieldset__container">
        {props.data[0].length === 0 ? renderEmptyList() : renderDepartments()}
      </section>
    );
  };

  const renderEmptyList = () => {
    return <EmptyList name="role" url="/app/form/role/new" />;
  };

  const renderDepartments = () => {
    const collatedData = collateDataByDept();
    let departments = [];
    for (const property in collatedData) {
      departments.push(property);
    }
    departments.sort((a, b) => a.localeCompare(b));
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
    props.data[0].forEach((item) => {
      !collatedData[item.department_name]
        ? (collatedData[item.department_name] = { roles: [item] })
        : collatedData[item.department_name].roles.push(item);
    });
    return collatedData;
  };

  return (
    <section className="fieldset__container">
      <fieldset className="fieldset">
        <legend className="fieldset__legend">
          <h2 className="fieldset__header">Roles</h2>
        </legend>
        {renderContainer()}
      </fieldset>
    </section>
  );
}

export default RolesList;
