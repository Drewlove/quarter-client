import React from 'react'; 
import {CapitalizeAllWords} from '../../Utilities/UtilityFunctions'; 

function CategoryTotal(props){
    const getPercentageOf = (sales) => {
        if(props.netProfit && sales){
            let percentage = ((sales-props.categoryTotal)/sales)*100
            return `${percentage.toFixed(2)}%`;     
        } else if(sales){
            let percentage = (props.categoryTotal/sales)*100
            return `${percentage.toFixed(2)}%`; 
        } else{
            return; 
        }
    }

  return (
    <div className="pl-fieldset__item-container pl-fieldset__item-container_total">
      <p className="pl-fieldset__item-text">{CapitalizeAllWords(props.name)}</p>
      <p className="pl-fieldset__item-text">
        {props.categoryTotal.toLocaleString()}
      </p>
      <p className="pl-fieldset__item-text">
        {getPercentageOf(props.salesTotal)}
      </p>
    </div>
  );
}

export default CategoryTotal; 