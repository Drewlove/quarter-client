import React, { useState, useEffect } from "react";
import EmptyList from "../../EmptyList/EmptyList";
import Category from "../Category/Category";
import CategoryTotal from "../CategoryTotal/CategoryTotal";

function ProfitLoss(props) {
  const [lineItemsById, setLineItemsById] = useState({});
  const [lineItemsByCategory, setLineItemsByCategory] = useState({
    sales: { total: 0, list: [] },
    cogs: { total: 0, list: [] },
    direct_labor: { total: 0, list: [] },
    overhead: { total: 0, list: [] },
  });

  const [pageReady, setPageReady] = useState();

  useEffect(() => {
    let lineItemsById = allocateLineItemsById();
    setLineItemsById(lineItemsById);
  }, []);

  useEffect(() => {
    if (Object.keys(lineItemsById).length !== 0) {
      let lineItemsByCategory = allocateLineItemsByCategory(lineItemsById);
      setLineItemsByCategory(lineItemsByCategory);
      setPageReady(true);
    }
  }, [lineItemsById]);

  const allocateLineItemsById = () => {
    let obj = {};
    props.data[0].forEach((key) => {
      obj[key.line_item_id] = key;
    });
    return obj;
  };

  const allocateLineItemsByCategory = () => {
    let obj = {
      sales: { total: 0, list: [] },
      cogs: { total: 0, list: [] },
      direct_labor: { total: 0, list: [] },
      overhead: { total: 0, list: [] },
    };
    props.data[0].forEach((key) => {
      if (key.line_item_amount_type === "percent")
        key = { ...key, amount: getAmountByPercent(key) };
      obj[key.line_item_category].list.push(key);
      obj[key.line_item_category].total += parseFloat(key.amount);
    });
    return obj;
  };

  const getAmountByPercent = (key) => {
    return (
      parseFloat(key.amount) *
      (lineItemsById[key.percent_of].amount * 0.01)
    ).toFixed(2);
  };

  // const getGrossProfit = () => {
  //   const totalSales = getTotal(lineItems.sales);
  //   const totalCogs = getTotal(lineItems.cogs);
  //   return totalSales - totalCogs;
  // };

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

  const renderEmptyList = () => {
    return <EmptyList name="line_item" url="/form/line_item/new" />;
  };

  const renderPage = () => {
    return pageReady ? renderPageContent() : null;
  };

  const renderPageContent = () => {
    return (
      <>
        <Category
          name="Sales"
          lineItems={lineItemsByCategory.sales.list}
          categoryTotal={lineItemsByCategory.sales.total}
        />
        <Category
          name="COGS"
          lineItems={lineItemsByCategory.cogs.list}
          categoryTotal={lineItemsByCategory.cogs.total}
          salesTotal={lineItemsByCategory.sales.total}
          kpiName="Gross Profit"
          // kpiNum={salesTotal -}
        />
      </>
    );
  };

  return (
    <>
      <section className="fieldset__container">
        {props.data[0].length === 0 ? renderEmptyList() : renderPage()}
      </section>
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
