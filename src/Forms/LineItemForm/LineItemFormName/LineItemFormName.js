import React from "react";
import Error from '../../Error/Error';

function LineItemFormName(props){
    return (
        <section className="input-section">
        <label className='input-section__label' htmlFor="line-item">Name</label>
        <div className="input-section__input-container">
        <input
          className={`input-section__input ${props.error ? "input-section__error" : ""}`}
          type="text"
          id="name"
          placeholder="Line Item Name"
          name="name"
          onChange={props.handleChange}
          onBlur={props.validate}
          value={props.value}
        />
        {props.error ? <Error message='Enter a name'/> : null}
        </div>
      </section>
      );
    }

export default LineItemFormName;
