import React from "react";
import Error from "../../CommonFormComponents/Error/Error";
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

  const isChecked = (day) => {
    return props.days[day];
  };

  const renderDays = () => {
    return daysList.map((day) => {
      return (
        <label htmlFor={day} key={day}>
          <input
            className="toggle-container__input"
            type="checkbox"
            id={day}
            name={day}
            checked={isChecked(day)}
            onChange={props.handleChangeDay}
          />
          <div className="toggle-container__box">{displayName(day)}</div>
        </label>
      );
    });
  };

  return (
    <section className="input-section input-section_shift">
      <label className="input-section__label">Days</label>
      <div>
        <div className="toggle-container">{renderDays()}</div>
        {props.error.length > 0 ? <Error message={props.error} /> : null}
      </div>
    </section>
  );
}

export default ShiftFormDays;
