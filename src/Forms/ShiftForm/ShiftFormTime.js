import React from "react";
import Error from "../Error/Error";

function ShiftFormTime(props) {
  return (
    <>
      <section className="input-section input-section_shift">
        <label className="input-section__label" htmlFor="start-time">
          Start
        </label>
        <div className="input-section__input-container">
          <input
            type="time"
            className={`input-section__input ${
              props.errorStart ? "input-section__error" : ""
            }`}
            id="start-time"
            onChange={props.handleChange}
            name="startTime"
            value={props.startTime}
          />
          {props.errorStart ? <Error message={props.errorStart} /> : null}
        </div>
      </section>
      <section className="input-section input-section_shift">
        <label className="input-section__label" htmlFor="end-time">
          End
        </label>
        <div className="input-section__input-container">
          <input
            type="time"
            className={`input-section__input ${
              props.errorEnd ? "input-section__error" : ""
            }`}
            id="end-time"
            onChange={props.handleChange}
            name="endTime"
            value={props.endTime}
          />
          {props.errorEnd ? <Error message={props.errorEnd} /> : null}
        </div>
      </section>
    </>
  );
}

export default ShiftFormTime;
