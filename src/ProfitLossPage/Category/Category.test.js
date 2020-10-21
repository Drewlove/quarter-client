import React from "react";
import ReactDOM from "react-dom";
import Category from "./Category";
import {CapitalizeAllWords} from '../../Utilities/UtilityFunctions'

const lineItems = [
  { category: "cogs", name: "food", amount: 6000, id: 4 },
  { category: "cogs", name: "beverage", amount: 500, id: 5 },
  { category: "cogs", name: "other", amount: 300, id: 6 },
];

const kpiName = "kpi";
const kpiNum = 100;
const salesTotal = 200;
const name = "category name";

const categoryTotal = () => {
    const obj = lineItems.reduce( (a, b) => ({amount: a.amount + b.amount}));
    return obj.amount
};

describe("Category", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Category
        lineItems={lineItems}
        kpiName="kpi"
        kpiNum={100}
        salesTotal={200}
        name="category"
        categoryTotal={categoryTotal()}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('capitalizes all words in category name', () => {
    expect(CapitalizeAllWords(name)).toBe('Category Name')
  })
});
