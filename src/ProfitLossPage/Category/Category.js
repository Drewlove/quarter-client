import React from "react";
import LineItem from "../LineItem/LineItem";
import CategoryTotal from "../CategoryTotal/CategoryTotal";
import { CapitalizeAllWords} from "../../Utilities/UtilityFunctions";

function Category(props) {
  const renderLineItems = (lineItems) => {
    return lineItems.map((lineItem) => {
      return (
        <LineItem
          category={lineItem.category}
          name={lineItem.name}
          amount={lineItem.amount}
          key={lineItem.id}
        />
      );
    });
  };

  const renderKpiInfo = () => {
    return (
      <CategoryTotal
        name={props.kpiName}
        categoryTotal={props.kpiNum}
        salesTotal={props.salesTotal}
      />
    );
  };

  return (
    <fieldset className="pl-fieldset">
      <legend className="pl-legend">
        <h2 className='pl-fieldset__header'>{CapitalizeAllWords(props.name)}</h2>
      </legend>
        {renderLineItems(props.lineItems)}
      <CategoryTotal
        name={CapitalizeAllWords(props.name)}
        categoryTotal={props.categoryTotal}
        salesTotal={props.salesTotal}
      />
      {props.kpiNum ? renderKpiInfo() : null}
    </fieldset>
  );
}

export default Category;
