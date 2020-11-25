import React from 'react'; 
import Error from '../Error/Error'

function ShiftFormPeople(props){

    return (
          <section className="input-section">
            <label className='input-section__label' htmlFor="people">People </label>
            <div className="input-section__input-container">
            <input
              className={`input-section__input ${props.error ? "input-section__error" : ""}`}
              type="number"
              id="people"
              placeholder="No. of People"
              name="people"
              value = {props.value}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
            {props.error ? <Error message='Enter a valid number'/> : null}
            </div>
          </section> 
      );
    }

export default ShiftFormPeople;