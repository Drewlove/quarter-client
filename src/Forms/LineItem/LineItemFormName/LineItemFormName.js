import React from "react";
import Error from "../../CommonFormComponents/FormError/FormError";

function LineItemFormName(props) {
  return (
    <section className="input-section input-section_name">
      <label className="input-section__label" htmlFor="line-item">
        Name
      </label>
      <div className="input-section__input-container">
        <input
          className="input-section__input"
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
