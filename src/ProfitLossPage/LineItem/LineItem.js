import React from 'react'; 
import {CapitalizeAllWords} from '../../Utilities/UtilityFunctions'; 
import {Hyphenate} from '../../Utilities/UtilityFunctions'; 

function LineItem(props){
    return (
    <a className="pl-fieldset__item-container" href={`/${Hyphenate(props.category)}/${Hyphenate(props.name)}}/`}>
        <p className="pl-fieldset__item-text">{CapitalizeAllWords(props.name)}</p>
        <p className="pl-fieldset__item-text">{props.amount.toLocaleString()}</p>
      </a>
    );
}

export default LineItem; 