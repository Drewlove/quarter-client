import React from "react";
import Error from "../Error/Error";
import {CapitalizeAllWords} from '../../Utilities/UtilityFunctions'

function ShiftFormDays(props) {
  const days = [
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
    const twoLetterDays = new Set(["thursday", "saturday", "sunday"])
    twoLetterDays.has(day) ? dayAbbr = day.substring(0,2) : dayAbbr = day.substring(0,1); 
    return(
    <p>{CapitalizeAllWords(dayAbbr)}</p>
    )
  }

  const renderDays = () => {
    return days.map((day) => {
      return (
        <label htmlFor={day} key={day}>
          <input
            className='toggle-container__input'
            type="checkbox"
            id={day}
            name={day}
            checked={props[day]}
            onChange={props.handleChangeDay}
          />
          <div className="toggle-container__box">
            {displayName(day)}
        </div>
        </label>
      );
    });
  };

  return (
      <section className='input-section input-section_shift'>
          <label className='input-section__label'>Days</label>
          <div className="toggle-container">
              {renderDays()}
              </div>
      </section>
    // {/* // className={`${props.error ? "input-section__error" : ""}`} */}
  );
}

export default ShiftFormDays;
