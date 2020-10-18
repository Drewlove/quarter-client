import React from 'react'; 
import LineItem from './LineItem'; 
import CategoryTotal from './CategoryTotal'; 
import {Capitalize} from '../Utilities/UtilityFunctions'; 

function Category(props){

  const renderLineItems = (lineItems) => {
    return lineItems.map((lineItem) => {
      return (
        <LineItem
          name={lineItem.name}
          amount={lineItem.amount}
          key={lineItem.id}
        />
      );
    });
  };

  const getTotal = (lineItems) => {
    return lineItems.reduce((a, b) => ({amount: a.amount + b.amount})); 
  }

  return (
    <fieldset className="pl-fieldset">
      <legend className="pl-legend">
        <h2>{Capitalize(props.categoryName)}</h2>
      </legend>
      {renderLineItems(props.lineItems)}
      <CategoryTotal categoryName={Capitalize(props.categoryName)} total={getTotal(props.lineItems).amount} />
    </fieldset>
  );
}

export default Category; 