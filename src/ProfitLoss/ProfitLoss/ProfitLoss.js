import React from "react";
import EmptyList from "../../EmptyList/EmptyList";
import Category from "../Category/Category";
import CategoryTotal from "../CategoryTotal/CategoryTotal";

function ProfitLoss(props) {
  // currently calculating sales total multiple times
  // instead, calculate sales total after values have been retrieved from server,
  // then pass that derived total value to all relevant components

  const getTotal = (arr) => {
    let total = 0;
    arr.forEach((key) => {
      total += Number(parseFloat(key.amount).toFixed(2));
    });
    return total;
  };

  const getGrossProfit = () => {
    const totalSales = getTotal(lineItems.sales);
    const totalCogs = getTotal(lineItems.cogs);
    return totalSales - totalCogs;
  };

  // const getPrimeCost = () => {
  //   return getTotal(cogsLineItems) + getTotal(directLaborLineItems);
  // };

  // const getTotalExpenses = () => {
  //   return (
  //     getTotal(cogsLineItems) +
  //     getTotal(directLaborLineItems) +
  //     getTotal(overheadLineItems)
  //   );
  // };

  const lineItemsById = {};

  const lineItems = {
    sales: [],
    cogs: [],
    direct_labor: [],
    overhead: [],
  };

  const renderContainer = () => {
    return (
      <section className="fieldset__container">
        {props.data[0].length === 0 ? renderEmptyList() : renderPnL()}
      </section>
    );
  };

  const renderEmptyList = () => {
    return <EmptyList name="line_item" url="/form/line_item/new" />;
  };

  const renderPnL = () => {
    allocateLineItems();
    return (
      <>
        <Category
          name="Sales"
          lineItems={lineItems.sales}
          categoryTotal={getTotal(lineItems.sales)}
        />
        <Category
          name="COGS"
          lineItems={getCOGS()}
          categoryTotal={getTotal(lineItems.cogs)}
          salesTotal={getTotal(lineItems.sales)}
          kpiName="Gross Profit"
          kpiNum={getGrossProfit()}
        />
      </>
    );
  };

  const allocateLineItems = () => {
    props.data[0].forEach((key) => {
      lineItems[key.line_item_category].push(key);
      lineItemsById[key.line_item_id] = key;
    });
  };

  const getCOGS = () => {
    let things = lineItems.cogs.map((key) => {
      if (key.line_item_amount_type === "percent") {
        return {
          ...key,
          amount: parseFloat(
            key.amount * (lineItemsById[key.percent_of].amount * 0.01)
          ).toFixed(2),
        };
      }
      return key;
    });
    return things;
  };

  return (
    <>
      {renderContainer()}

      {/* <Category
          name="direct labor"
          lineItems={directLaborLineItems}
          categoryTotal={getTotal(directLaborLineItems)}
          salesTotal={getTotal(salesLineItems)}
          kpiName="Prime Cost"
          kpiNum={getPrimeCost()}
        /> */}

      {/* <Category
          name="overhead"
          lineItems={overheadLineItems}
          categoryTotal={getTotal(overheadLineItems)}
          salesTotal={getTotal(salesLineItems)}
        /> */}

      {/* <CategoryTotal
          name="Net Profit"
          categoryTotal={getTotalExpenses()}
          salesTotal={getTotal(salesLineItems)}
          netProfit={true}
        />  */}
    </>
  );
}

export default ProfitLoss;
