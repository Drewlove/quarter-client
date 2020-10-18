import React from 'react'; 
import {Capitalize} from '../Utilities/UtilityFunctions'; 

function LineItem(props){
    return (
      <a className="pl-fieldset__item-container" href={`/${props.category}/${props.name}}/`}>
        <p className="pl-fieldset__item-text">{Capitalize(props.name)}</p>
        <p className="pl-fieldset__item-text">{props.amount.toLocaleString()}</p>
      </a>
    );
}

export default LineItem; 