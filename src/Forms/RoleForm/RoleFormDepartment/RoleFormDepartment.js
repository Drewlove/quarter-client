import React from "react";
import Error from "../../CommonFormComponents/FormError/FormError";
import { CapitalizeAllWords } from "../../../Utilities/UtilityFunctions";
import { API_GET } from "../../../Utilities/API_Methods/API_GET";
import { getByDisplayValue } from "@testing-library/react";

function RoleFormDepartment(props) {
  const [{ data, isLoading, isError }, dispatch] = API_GET("departments");

  const renderDepartments = () => {
    return data.map((key) => {
      return (
        <option value={key.department_id} key={key.department_id}>
          {key.department_name}
        </option>
      );
    });
  };

  const renderResults = () => {
    return isError ? renderError() : renderRoleFormDepartment();
  };

  //error should be a modal that then redirects
  const renderError = () => {
    return <p className="loading-error">Error! Failed to load data.</p>;
  };

  const getDefaultValue = () => {
    return props.value;
  };

  const renderRoleFormDepartment = () => {
    console.log(props.value);
    return (
      <section className="input-section input-section_role-department">
        <label className="input-section__label" htmlFor="department">
          Department
        </label>
        <div className="input-section__input-container">
          <select
            className={`input-section__input ${
              props.error ? "input-section__error" : ""
            }`}
            id="department"
            onChange={props.handleChange}
            name="department_id"
            value={props.value}
          >
            <option value={""} disabled>
              - Select Department -
            </option>
            {renderDepartments()}
          </select>
          {props.error ? <Error message={props.error} /> : null}
        </div>
      </section>
    );
  };

  return <>{isLoading ? null : renderResults()}</>;
}

export default RoleFormDepartment;
