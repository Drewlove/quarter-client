import React from "react";
import { mount } from "enzyme";
import LineItemForm from "./LineItemForm";

const lineItems = [
  {
    amount: "1000.25",
    line_item_amount_type: "dollars",
    line_item_category: "sales",
    line_item_id: 1,
    line_item_name: "Food",
    percent_of: null,
  },
  {
    amount: "500.00",
    line_item_amount_type: "dollars",
    line_item_category: "sales",
    line_item_id: 2,
    line_item_name: "Beverage",
    percent_of: null,
  },
  {
    amount: "25",
    line_item_amount_type: "percent",
    line_item_category: "cogs",
    line_item_id: 3,
    line_item_name: "Food",
    percent_of: 1,
  },
  {
    amount: "15",
    line_item_amount_type: "percent",
    line_item_category: "cogs",
    line_item_id: 4,
    line_item_name: "Beverage",
    percent_of: 2,
  },
  {
    amount: "750.00",
    line_item_amount_type: "dollars",
    line_item_category: "overhead",
    line_item_id: 5,
    line_item_name: "Rent",
    percent_of: null,
  },
  {
    amount: "350.00",
    line_item_amount_type: "dollars",
    line_item_category: "overhead",
    line_item_id: 6,
    line_item_name: "Utilities",
    percent_of: null,
  },
];

const lineItemDollar = {
  amount: "1000.25",
  line_item_amount_type: "dollars",
  line_item_category: "sales",
  line_item_id: 1,
  line_item_name: "Food",
  percent_of: null,
};

const lineItemPercent = {
  amount: "25.00",
  line_item_amount_type: "percent",
  line_item_category: "cogs",
  line_item_id: 3,
  line_item_name: "Food",
  percent_of: 1,
};

const dummyDataLineItemDollar = [lineItems, lineItemDollar];
const dummyDataLineItemPercent = [lineItems, lineItemPercent];
const dummyDataBlankForm = [lineItems];

describe("LineItemForm, Category", () => {
  it("renders", () => {
    const wrapper = mount(
      <LineItemForm data={dummyDataLineItemDollar} id="1" />
    );
    expect(wrapper.find(".input-section_category")).toHaveLength(1);
  });
  it("If value is given, the value renders", () => {
    const wrapper = mount(
      <LineItemForm data={dummyDataLineItemDollar} id="1" />
    );
    expect(wrapper.find("#line_item_category").props().value).toBe("sales");
  });
  it("If no value is given, then no value renders", () => {
    const wrapper = mount(<LineItemForm data={dummyDataBlankForm} id="new" />);
    expect(wrapper.find("#line_item_category").props().value).toBe("");
  });
  it("renders category options", () => {
    const wrapper = mount(<LineItemForm data={dummyDataLineItemDollar} />);
    expect(wrapper.find(".input-section_category option")).toHaveLength(4);
    expect(wrapper.find(".input-section_category option").at(0).text()).toBe(
      "- Select Category -"
    );
    expect(wrapper.find(".input-section_category option").at(1).text()).toBe(
      "Sales"
    );
    expect(wrapper.find(".input-section_category option").at(2).text()).toBe(
      "COGS"
    );
    expect(wrapper.find(".input-section_category option").at(3).text()).toBe(
      "Overhead"
    );
  });
  it("If user clicks save and value is blank, error component renders", () => {
    const wrapper = mount(<LineItemForm data={dummyDataBlankForm} id="new" />);
    wrapper.find("#button-save").simulate("click");
    expect(wrapper.find(".input-section_category .form-error")).toHaveLength(1);
  });
  it("If user clicks save and value is valid, no error component renders", () => {
    const wrapper = mount(
      <LineItemForm data={dummyDataLineItemDollar} id="1" />
    );
    wrapper.find("#button-save").simulate("click");
    expect(wrapper.find(".input-section_category .form-error")).toHaveLength(0);
  });
  it("updates value based on user input", () => {
    const wrapper = mount(
      <LineItemForm data={dummyDataLineItemDollar} id="1" />
    );
    wrapper.find(".input-section_category select").simulate("change", {
      target: { name: "line_item_category", value: "cogs" },
    });
    expect(wrapper.find(".input-section_category select").props().value).toBe(
      "cogs"
    );
  });
});
