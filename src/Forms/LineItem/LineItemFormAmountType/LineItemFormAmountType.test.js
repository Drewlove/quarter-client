import React from "react";
import { shallow } from "enzyme";
import LineItemFormAmountType from "./LineItemFormAmountType";

describe("LineItemFormAmountType", () => {
  it("renders", () => {
    const wrapper = shallow(<LineItemFormAmountType />);
    expect(wrapper.find(".form-section_amount-type")).toHaveLength(1);
  });
  it("if value is 'dollars', dollar input is checked", () => {
    const wrapper = shallow(<LineItemFormAmountType value="dollars" />);
    expect(wrapper.find("#dollars").props().checked).toBe(true);
    expect(wrapper.find("#percent").props().checked).toBe(false);
  });
  it("if value is 'percent', percent input is checked", () => {
    const wrapper = shallow(<LineItemFormAmountType value="percent" />);
    expect(wrapper.find("#percent").props().checked).toBe(true);
    expect(wrapper.find("#dollars").props().checked).toBe(false);
  });
});
