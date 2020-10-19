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

  const renderKpiInfo = () => {
    return <CategoryTotal 
    name={props.kpiName} 
    categoryTotal={props.kpiNum} 
    salesTotal={props.salesTotal}
    />
  }

  return (
    <fieldset className="pl-fieldset">
      <legend className="pl-legend">
        <h2>{Capitalize(props.name)}</h2>
      </legend>
      {renderLineItems(props.lineItems)}
      <CategoryTotal 
      name={Capitalize(props.name)} 
      categoryTotal={props.categoryTotal} 
      salesTotal={props.salesTotal}
      />
      {props.kpiNum ? renderKpiInfo() : null}
    </fieldset>
  )
}

export default Category; 