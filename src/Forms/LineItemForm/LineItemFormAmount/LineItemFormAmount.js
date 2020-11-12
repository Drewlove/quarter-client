import React from "react";
import Error from '../../Error/Error';

function LineItemFormAmount(props){
    const getAmountSign = () => {
        return props.amountType === "dollars" ? "$" : "%";
      };

    return (
          <section className="input-section">
            <label className='input-section__label' htmlFor="amount">Amount {getAmountSign()} </label>
            <div className="input-section__input-container">
            <input
              className={`input-section__input ${props.error ? "input-section__error" : ""}`}
              type="text"
              id="amount"
              placeholder="Dollar Amount"
              name="amount"
              value = {props.value}
              onChange={props.handleChangeAmount}
              onBlur={props.handleBlurAmount}
            />
            {props.error ? <Error message='Enter a valid number'/> : null}
            </div>
          </section> 
      );
    }

export default LineItemFormAmount;
