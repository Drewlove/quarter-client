import React from "react";
import FormError from "../../CommonFormComponents/FormError/FormError";

function RoleFormName(props) {
  return (
    <section className="input-section input-section_role-name">
      <label className="input-section__label" htmlFor="line-item">
        Role
      </label>
      <div className="input-section__input-container">
        <input
          className="input-section__input"
          type="text"
          id="role"
          placeholder="Role"
          name="role_name"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.value}
        />
        {props.formError.length > 0 ? (
          <FormError message={props.formError} />
        ) : null}
      </div>
    </section>
  );
}

export default RoleFormName;
