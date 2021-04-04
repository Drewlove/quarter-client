import React from "react";
import FormError from "../../CommonFormComponents/FormError/FormError";

function RoleFormName(props) {
  return (
    <section className="form-section form-section_role-name">
      <label className="form-section__label" htmlFor="line-item">
        Role
      </label>
      <div className="form-section__input-container">
        <input
          className="form-section__input"
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
