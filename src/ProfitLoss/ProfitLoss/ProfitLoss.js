import React, { useState, useEffect } from "react";
import EmptyList from "../../EmptyList/EmptyList";
import Category from "../Category/Category";
import KpiTotal from "../KpiTotal/KpiTotal";
import { COLLATE_SCHEDULE } from "../../Utilities/COLLATE_SCHEDULE";

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
    let obj = {};
    props.data[0].forEach((key) => {
      obj[key.line_item_id] = key;
    });
    setLineItemsById(obj);
  }, []);

  useEffect(() => {
    if (Object.keys(lineItemsById).length !== 0) {
      let lineItemsByCategory = allocateLineItemsByCategory(lineItemsById);
      setLineItemsByCategory(lineItemsByCategory);
      setPageReady(true);
    }
  }, [lineItemsById]);

  const allocateLineItemsByCategory = () => {
    let lineItemsByCategoryObj = { ...lineItemsByCategory };
    props.data[0].forEach((key) => {
      if (key.line_item_amount_type === "percent")
        key = { ...key, amount: getAmountByPercent(key) };

      lineItemsByCategoryObj[key.line_item_category].list.push(key);
      lineItemsByCategoryObj[key.line_item_category].total += Number(
        key.amount
      );
    });
    let directLaborCategoryObj = getDirectLaborCategory();
    return {
      ...lineItemsByCategoryObj,
      direct_labor: directLaborCategoryObj,
    };
  };

  const getDirectLaborCategory = () => {
    let directLaborCategoryObj = { total: 0, list: [] };
    let schedule = COLLATE_SCHEDULE(props.data[1]);
    schedule.forEach((key, i) => {
      directLaborCategoryObj.list.push({
        line_item_category: "direct_labor",
        line_item_id: i,
        line_item_name: key.deptName,
        amount: parseFloat(key.cost).toFixed(2),
        line_item_amount_type: "dollars",
        percent_of: null,
      });
      directLaborCategoryObj.total += Number(key.cost);
    });
    return directLaborCategoryObj;
  };

  const getAmountByPercent = (key) => {
    return (
      parseFloat(key.amount) *
      (lineItemsById[key.percent_of].amount * 0.01)
    ).toFixed(2);
  };

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
          amount={lineItemsByCategory.sales.total}
        />
        <Category
          name="COGS"
          lineItems={lineItemsByCategory.cogs.list}
          amount={lineItemsByCategory.cogs.total}
          salesTotal={lineItemsByCategory.sales.total}
        />
        <KpiTotal
          name="Gross Profit"
          amount={getGrossProfit()}
          salesTotal={lineItemsByCategory.sales.total}
        />

        <Category
          name="Direct Labor"
          lineItems={lineItemsByCategory.direct_labor.list}
          amount={lineItemsByCategory.direct_labor.total}
          salesTotal={lineItemsByCategory.sales.total}
        />
        <KpiTotal
          name="Prime Costs"
          amount={getPrimeCosts()}
          salesTotal={lineItemsByCategory.sales.total}
        />
        <Category
          name="Overhead"
          lineItems={lineItemsByCategory.overhead.list}
          amount={lineItemsByCategory.overhead.total}
          salesTotal={lineItemsByCategory.sales.total}
        />
        <KpiTotal
          name="Net Profit"
          amount={getNetProfit()}
          salesTotal={lineItemsByCategory.sales.total}
        />
      </>
    );
  };

  const getGrossProfit = () => {
    return lineItemsByCategory.sales.total - lineItemsByCategory.cogs.total;
  };

  const getPrimeCosts = () => {
    return (
      lineItemsByCategory.cogs.total + lineItemsByCategory.direct_labor.total
    );
  };

  const getNetProfit = () => {
    return (
      lineItemsByCategory.sales.total -
      lineItemsByCategory.cogs.total -
      lineItemsByCategory.direct_labor.total -
      lineItemsByCategory.overhead.total
    );
  };

  return (
    <>
      <section className="fieldset__container">
        {props.data[0].length === 0 ? renderEmptyList() : renderPage()}
      </section>
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
