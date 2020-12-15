import React from "react";
import Error from "../../CommonFormComponents/Error/Error";

function ShiftFormPeople(props) {
  return (
    <section className="input-section input-section_shift">
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
        {props.error.length > 0 ? <Error message={props.error} /> : null}
      </div>
    </section>
  );
}

export default ShiftFormPeople;
