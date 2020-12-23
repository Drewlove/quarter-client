import React from "react";
import { shallow, mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import ProfitLossPage from "./ProfitLossPage";

const salesLineItems = [
  { category: "sales", name: "food", amount: 30000, id: 1 },
  { category: "sales", name: "beverage", amount: 20000, id: 2 },
  { category: "sales", name: "other", amount: 10000, id: 3 },
];

const cogsLineItems = [
  { category: "cogs", name: "food", amount: 3000, id: 4 },
  { category: "cogs", name: "beverage", amount: 2000, id: 5 },
  { category: "cogs", name: "other", amount: 1000, id: 6 },
];

const directLaborLineItems = [
  { category: "direct labor", name: "salaried", amount: 5000, id: 7 },
  { category: "direct labor", name: "hourly", amount: 5000, id: 8 },
  { category: "direct labor", name: "payroll tax", amount: 1000, id: 9 },
];

const overheadLineItems = [
  { category: "overhead", name: "supplies", amount: 1000, id: 10 },
  { category: "overhead", name: "repairs", amount: 1000, id: 11 },
  { category: "overhead", name: "advertising", amount: 500, id: 12 },
  { category: "overhead", name: "manager's salary", amount: 2000, id: 13 },
  { category: "overhead", name: "rent", amount: 5000, id: 16 },
];

const getTotal = (lineItems) => {
  const totalObj = lineItems.reduce((a, b) => ({
    amount: a.amount + b.amount,
  }));
  return totalObj.amount;
};

const getGrossProfit = () => {
  const totalSales = getTotal(salesLineItems);
  const kpiNum = getTotal(cogsLineItems);
  return totalSales - kpiNum;
};

const getPrimeCost = () => {
  return getTotal(cogsLineItems) + getTotal(directLaborLineItems);
};

const getTotalExpenses = () => {
  return (
    getTotal(cogsLineItems) +
    getTotal(directLaborLineItems) +
    getTotal(overheadLineItems)
  );
};

describe("ProfitLossPage", () => {
  it("renders", () => {
    const wrapper = shallow(<ProfitLossPage />);
  });
  it("renders 4 category fieldsets", () => {
    const wrapper = mount(
      <BrowserRouter>
        <ProfitLossPage />
      </BrowserRouter>
    );
    expect(wrapper.find(".fieldset_pl")).toHaveLength(4);
  });
  it("calculates sales total accurately", () => {
    const salesTotal = getTotal(salesLineItems);
    expect(salesTotal).toBe(60000);
  });
  it("calculates getGrossProfit accurately", () => {
    const grossProfit = getGrossProfit();
    expect(grossProfit).toBe(54000);
  });
  it("calculates getPrimeCost accurately", () => {
    const primeCost = getPrimeCost();
    expect(primeCost).toBe(17000);
  });
  it("calculates getTotalExpenses accurately", () => {
    const totalExpenses = getTotalExpenses();
    expect(totalExpenses).toBe(26500);
  });
});
