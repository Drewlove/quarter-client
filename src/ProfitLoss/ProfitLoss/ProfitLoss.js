import React, { useState, useEffect } from "react";
import EmptyList from "../../EmptyList/EmptyList";
import Category from "../Category/Category";
import KpiTotal from "../KpiTotal/KpiTotal";
import { COLLATE_SCHEDULE } from "../../Utilities/COLLATE_SCHEDULE";

function ProfitLoss(props) {
  const [lineItemsById, setLineItemsById] = useState({});

  useEffect(() => {
    let obj = {};
    props.data[0].forEach((key) => {
      obj[key.line_item_id] = key;
    });
    setLineItemsById(obj);
  }, [props.data]);

  const renderEmptyList = () => {
    return <EmptyList name="Line Item" url="/app/form/line-item/new" />;
  };

  const getGrossProfit = (lineItemsByCategory) => {
    return lineItemsByCategory.sales.total - lineItemsByCategory.cogs.total;
  };

  const getPrimeCosts = (lineItemsByCategory) => {
    return (
      lineItemsByCategory.cogs.total + lineItemsByCategory.direct_labor.total
    );
  };

  const getNetProfit = (lineItemsByCategory) => {
    return (
      lineItemsByCategory.sales.total -
      lineItemsByCategory.cogs.total -
      lineItemsByCategory.direct_labor.total -
      lineItemsByCategory.overhead.total
    );
  };

  const renderPage = () => {
    return Object.keys(lineItemsById).length === 0 ? null : renderPageContent();
  };

  const renderPageContent = () => {
    const lineItemsByCategory = getLineItemsByCategory();
    return (
      <>
        <div className="pnl__header-container">
          <h1>The Quarter</h1>
        </div>
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
          amount={getGrossProfit(lineItemsByCategory)}
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
          amount={getPrimeCosts(lineItemsByCategory)}
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
          amount={getNetProfit(lineItemsByCategory)}
          salesTotal={lineItemsByCategory.sales.total}
        />
      </>
    );
  };

  const getLineItemsByCategory = () => {
    let lineItemsByCategoryObj = {
      sales: { total: 0, list: [] },
      cogs: { total: 0, list: [] },
      direct_labor: { total: 0, list: [] },
      overhead: { total: 0, list: [] },
    };
    props.data[0].forEach((key) => {
      if (key.line_item_amount_type === "percent") {
        key = { ...key, amount: getAmountByPercent(key) };
      }
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

  const getAmountByPercent = (key) => {
    return (
      parseFloat(key.amount) *
      (lineItemsById[key.percent_of].amount * 0.01)
    ).toFixed(2);
  };

  const getDirectLaborCategory = () => {
    let directLaborCategoryObj = { total: 0, list: [] };
    let schedule = COLLATE_SCHEDULE(props.data[1]);
    Object.keys(schedule).forEach((key, i) => {
      let obj = schedule[key];
      directLaborCategoryObj.total += obj.cost;
      directLaborCategoryObj.list.push({
        line_item_category: "direct_labor",
        line_item_id: i,
        line_item_name: key,
        amount: parseFloat(obj.cost * 13).toFixed(2),
        line_item_amount_type: "dollars",
        percent_of: null,
      });
    });
    return directLaborCategoryObj;
  };

  return (
    <>
      <section className="fieldset__container fieldset__container-pnl">
        {props.data[0].length === 0 && props.data[1].length === 0
          ? renderEmptyList()
          : renderPage()}
      </section>
    </>
  );
}

export default ProfitLoss;
