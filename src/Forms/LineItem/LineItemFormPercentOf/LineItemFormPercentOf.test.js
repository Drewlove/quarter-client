import React from "react";
import { shallow, mount } from "enzyme";
import LineItemFormPercentOf from "./LineItemFormPercentOf";

const lineItems = {
  sales: [
    { line_item_category: "sales", line_item_id: 1, line_item_name: "Food" },
    {
      line_item_category: "sales",
      line_item_id: 2,
      line_item_name: "Beverage",
    },
  ],
  cogs: [
    { line_item_category: "cogs", line_item_id: 3, line_item_name: "Food" },
    { line_item_category: "cogs", line_item_id: 4, line_item_name: "Beverage" },
  ],
  overhead: [
    { line_item_category: "overhead", line_item_id: 5, line_item_name: "Rent" },
    {
      line_item_category: "overhead",
      line_item_id: 6,
      line_item_name: "Utilities",
    },
  ],
};

describe("LineItemFormPercentOf", () => {
  it("renders", () => {
    const wrapper = shallow(<LineItemFormPercentOf lineItems={lineItems} />);
    expect(wrapper.find(".form-section_percent-of")).toHaveLength(1);
  });
  it("renders", () => {
    const wrapper = shallow(<LineItemFormPercentOf lineItems={lineItems} />);
    expect(wrapper.find(".form-section_percent-of")).toHaveLength(1);
  });
  it("If error, error component renders", () => {
    const wrapper = mount(
      <LineItemFormPercentOf error="Error" lineItems={lineItems} />
    );
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("If no error, no error component renders", () => {
    const wrapper = mount(
      <LineItemFormPercentOf error="" lineItems={lineItems} />
    );
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
  it("If value is given, the value renders", () => {
    const wrapper = shallow(
      <LineItemFormPercentOf value={1} lineItems={lineItems} />
    );
    expect(wrapper.find("select").props().value).toBe(1);
  });
  it("If no value is given, then no value renders", () => {
    const wrapper = shallow(
      <LineItemFormPercentOf value={null} lineItems={lineItems} />
    );
    expect(wrapper.find("select").props().value).toBe("");
  });
  it("renders options", () => {
    const wrapper = shallow(<LineItemFormPercentOf lineItems={lineItems} />);
    expect(wrapper.find("option")).toHaveLength(7);
    expect(wrapper.find("option").at(0).text()).toBe("- Select Line Item -");
    expect(wrapper.find("option").at(1).text()).toBe("Sales - Food");
    expect(wrapper.find("option").at(2).text()).toBe("Sales - Beverage");
    expect(wrapper.find("option").at(3).text()).toBe("COGS - Food");
    expect(wrapper.find("option").at(4).text()).toBe("COGS - Beverage");
    expect(wrapper.find("option").at(5).text()).toBe("Overhead - Rent");
    expect(wrapper.find("option").at(6).text()).toBe("Overhead - Utilities");
  });
});
