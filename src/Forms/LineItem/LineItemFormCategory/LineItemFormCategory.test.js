import React from "react";
import { shallow, mount } from "enzyme";
import LineItemFormCategory from "./LineItemFormCategory";

const categories = ["sales", "cogs", "overhead"];

const lineItem = {
  amount: "18.00",
  line_item_amount_type: "percent",
  line_item_category: "cogs",
  line_item_id: 8,
  line_item_name: "Beverage",
  percent_of: 2,
};

describe("LineItemFormCategory", () => {
  it("renders", () => {
    const wrapper = shallow(<LineItemFormCategory categories={categories} />);
    expect(wrapper.find(".input-section")).toHaveLength(1);
  });
  it("If error, error component renders", () => {
    const wrapper = mount(
      <LineItemFormCategory error={true} categories={categories} />
    );
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("If no error, no error component renders", () => {
    const wrapper = mount(
      <LineItemFormCategory error={false} categories={categories} />
    );
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
});
