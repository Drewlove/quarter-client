import React from "react";
import Error from "../../CommonFormComponents/FormError/FormError";
import { CapitalizeAllWords } from "../../../Utilities/UtilityFunctions";

function RoleFormDepartment(props) {
  const expenseCategories = ["service", "kitchen", "production"];

  const renderCategories = (categories) => {
    return categories.map((department) => {
      return (
        <option value={department} key={department}>
          {CapitalizeAllWords(department)}
        </option>
      );
    });
  };

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
          name="department"
          value={props.value}
        >
          <option value={""} disabled>
            - Select Department -
          </option>
          {renderCategories(expenseCategories)}
        </select>
        {props.error ? <Error message={props.error} /> : null}
      </div>
    </section>
  );
}

export default RoleFormDepartment;
