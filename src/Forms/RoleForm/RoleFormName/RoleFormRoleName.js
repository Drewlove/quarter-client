import React from "react";
import Error from "../../CommonFormComponents/FormError/FormError";

function RoleForm(props) {
  return (
    <section className="input-section input-section_role-name">
      <label className="input-section__label" htmlFor="line-item">
        Role
      </label>
      <div className="input-section__input-container">
        <input
          className={`input-section__input ${
            props.error ? "input-section__error" : ""
          }`}
          type="text"
          id="role"
          placeholder="Role"
          name="role"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.role}
        />
        {props.error ? <Error message={props.error} /> : null}
      </div>
    </section>
  );
}

export default RoleForm;
