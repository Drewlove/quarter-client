import React from "react";
import Category from "./Category";
import { shallow, mount } from "enzyme";

const listSales = [
  {
    line_item_category: "sales",
    line_item_id: 1,
    line_item_name: "Beverage",
    amount: "1000.50",
    line_item_amount_type: "dollars",
    percent_of: null,
  },
  {
    line_item_category: "sales",
    line_item_id: 2,
    line_item_name: "Food",
    amount: "500.25",
    line_item_amount_type: "dollars",
    percent_of: null,
  },
];

describe("Category", () => {
  it("Renders", () => {
    const wrapper = shallow(
      <Category name="sales" lineItems={listSales} amount={1500.75} />
    );
    expect(wrapper.find(".fieldset_pl-category")).toHaveLength(1);
  });
  it("Renders the category name", () => {
    const wrapper = shallow(
      <Category name="sales" lineItems={listSales} amount={1500.75} />
    );
    expect(wrapper.find(".fieldset__header").text()).toBe("sales");
  });
});
