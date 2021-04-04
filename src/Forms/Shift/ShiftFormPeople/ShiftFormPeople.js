import React from "react";
import FormError from "../../CommonFormComponents/FormError/FormError";

function ShiftFormPeople(props) {
  return (
    <section className="form-section form-section_people">
      <label className="form-section__label" htmlFor="people">
        People{" "}
      </label>
      <div className="form-section__input-container">
        <input
          className="form-section__input form-section__input_people"
          type="number"
          id="people"
          placeholder="No. of People"
          name="people"
          value={props.value}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        />
        {props.formError.length > 0 ? (
          <FormError message={props.formError} />
        ) : null}
      </div>
    </section>
  );
}

export default ShiftFormPeople;
