import React from 'react'; 
import {Capitalize} from '../Utilities/UtilityFunctions'; 

function CategoryTotal(props){
  return (
    <div className="pl-fieldset__item-container pl-fieldset__item-container_black">
      <p className="pl-fieldset__item-text">
        Total {Capitalize(props.categoryName)}:
      </p>
      <p className="pl-fieldset__item-text">{props.total.toLocaleString()}</p>
    </div>
  );
}

export default CategoryTotal; 