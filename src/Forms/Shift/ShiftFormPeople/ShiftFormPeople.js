import React from "react";
import FormError from "../../CommonFormComponents/FormError/FormError";

function ShiftFormPeople(props) {
  return (
    <section className="input-section input-section_people">
      <label className="input-section__label" htmlFor="people">
        People{" "}
      </label>
      <div className="input-section__input-container">
        <input
          className={`input-section__input ${
            props.error ? "input-section__error" : ""
          }`}
          type="number"
          id="people"
          placeholder="No. of People"
          name="people"
          value={props.value}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
        />
        {props.error.length > 0 ? <FormError message={props.error} /> : null}
      </div>
    </section>
  );
}

export default ShiftFormPeople;
