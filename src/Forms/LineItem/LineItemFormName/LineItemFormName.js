import React from "react";
import Error from "../../CommonFormComponents/FormError/FormError";

function LineItemFormName(props) {
  return (
    <section className="form-section form-section_name">
      <label className="form-section__label" htmlFor="line-item">
        Name
      </label>
      <div className="form-section__input-container">
        <input
          className="form-section__input"
          type="text"
          id="line_item_name"
          placeholder="Line Item Name"
          name="line_item_name"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          value={props.value}
        />
        {props.error ? <Error message={props.error} /> : null}
      </div>
    </section>
  );
}

export default LineItemFormName;
