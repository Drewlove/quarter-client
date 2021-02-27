import React from "react";

function LineItemAmount(props) {
  const renderLargeAmount = () => {
    return (
      <p className="fieldset__item-text">
        {parseFloat(props.amount).toFixed(2)}
      </p>
    );
  };

  const renderNormalAmount = () => {
    let renderedAmount = new Array(15).fill("");
    renderedAmount[0] = props.numberSymbol;
    let stringAmount = Number(props.amount).toLocaleString(undefined, {
      minimumFractionDigits: 2,
    });

    let j = 14;
    for (let i = stringAmount.length - 1; i >= 0; i--) {
      let char = stringAmount[i];
      renderedAmount[j] = char;
      j--;
    }

    return (
      <div className="fieldset__amount-container">
        <div className="fieldset__amount">{renderedAmount[0]}</div>
        <div className="fieldset__amount">{renderedAmount[1]}</div>
        <div className="fieldset__amount">{renderedAmount[2]}</div>
        <div className="fieldset__amount">{renderedAmount[3]}</div>
        <div className="fieldset__amount">{renderedAmount[4]}</div>
        <div className="fieldset__amount">{renderedAmount[5]}</div>
        <div className="fieldset__amount">{renderedAmount[6]}</div>
        <div className="fieldset__amount">{renderedAmount[7]}</div>
        <div className="fieldset__amount">{renderedAmount[8]}</div>
        <div className="fieldset__amount">{renderedAmount[9]}</div>
        <div className="fieldset__amount">{renderedAmount[10]}</div>
        <div className="fieldset__amount">{renderedAmount[11]}</div>
        <div className="fieldset__amount">{renderedAmount[12]}</div>
        <div className="fieldset__amount">{renderedAmount[13]}</div>
        <div className="fieldset__amount">{renderedAmount[14]}</div>
      </div>
    );
  };

  return (
    <>{props.amount.length > 12 ? renderLargeAmount() : renderNormalAmount()}</>
  );
}

export default LineItemAmount;
