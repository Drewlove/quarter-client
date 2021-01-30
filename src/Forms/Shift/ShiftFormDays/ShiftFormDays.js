import React from "react";
import Error from "../../CommonFormComponents/FormError/FormError";
import { CapitalizeAllWords } from "../../../Utilities/UtilityFunctions";

function ShiftFormDays(props) {
  const daysList = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  const displayName = (day) => {
    let dayAbbr = "";
    const twoLetterDays = new Set(["thursday", "saturday", "sunday"]);
    twoLetterDays.has(day)
      ? (dayAbbr = day.substring(0, 2))
      : (dayAbbr = day.substring(0, 1));
    return <p>{CapitalizeAllWords(dayAbbr)}</p>;
  };

  const renderDays = () => {
    return daysList.map((key, idx) => {
      return (
        <label htmlFor={key} key={key}>
          <input
            className="toggle-container__input"
            type="checkbox"
            id={key}
            name="shift_day"
            checked={props.days.indexOf(idx) >= 0}
            onChange={props.handleChangeDay}
            value={idx}
          />
          <div className="toggle-container__box">{displayName(key)}</div>
        </label>
      );
    });
  };

  return (
    <section className="input-section input-section_days">
      <label className="input-section__label">Days</label>
      <div>
        <div className="toggle-container">{renderDays()}</div>
        {props.formError.length > 0 ? (
          <Error message={props.formError} />
        ) : null}
      </div>
    </section>
  );
}

export default ShiftFormDays;
