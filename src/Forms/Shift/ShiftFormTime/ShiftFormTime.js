import React from "react";
import FormError from "../../CommonFormComponents/FormError/FormError";

function ShiftFormTime(props) {
  return (
    <>
      <section className="input-section input-section_time">
        <label className="input-section__label" htmlFor="start-time">
          Start
        </label>
        <div className="input-section__input-container">
          <input
            type="time"
            className="input-section__input input-section__input_time"
            id="start-time"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            name="shift_start"
            value={props.startTime}
          />
          {props.formErrorStart ? (
            <FormError message={props.formErrorStart} />
          ) : null}
        </div>
      </section>
      <section className="input-section input-section_time">
        <label className="input-section__label" htmlFor="end-time">
          End
        </label>
        <div className="input-section__input-container">
          <input
            type="time"
            className="input-section__input input-section__input_time"
            id="end-time"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            name="shift_end"
            value={props.endTime}
          />
          {props.formErrorEnd ? (
            <FormError message={props.formErrorEnd} />
          ) : null}
        </div>
      </section>
    </>
  );
}

export default ShiftFormTime;
