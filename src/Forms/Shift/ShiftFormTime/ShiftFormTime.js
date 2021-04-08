import React from "react";
import FormError from "../../CommonFormComponents/FormError/FormError";

function ShiftFormTime(props) {
  return (
    <>
      <section className="form-section form-section_time">
        <label className="form-section__label" htmlFor="start-time">
          Start
        </label>
        <div className="form-section__input-container">
          <input
            type="time"
            className="form-section__input form-section__input_time"
            id="start-time"
            onChange={props.handleChangeShiftStart}
            onBlur={props.handleBlur}
            name="shift_start"
            value={props.startTime}
          />
          {props.formErrorStart ? (
            <FormError message={props.formErrorStart} />
          ) : null}
        </div>
      </section>
      <section className="form-section form-section_time">
        <label className="form-section__label" htmlFor="end-time">
          End
        </label>
        <div className="form-section__input-container">
          <input
            type="time"
            className="form-section__input form-section__input_time"
            id="end-time"
            onChange={props.handleChangeShiftEnd}
            onBlur={props.handleBlurShiftEnd}
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
