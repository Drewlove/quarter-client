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
    let j = 14;
    renderedAmount[0] = props.numberSymbol;

    let commaIndex = new Set([4, 8]);

    for (let i = props.amount.length - 1; i >= 0; i--) {
      let char = props.amount[i];
      let nextChar = props.amount[i - 1];

      if (nextChar !== "" && commaIndex.has(j)) {
        renderedAmount[j] = ",";
        renderedAmount[j - 1] = char;
        j--;
      } else {
        renderedAmount[j] = char;
      }
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
