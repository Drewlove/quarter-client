import React from "react";
import ShiftFormWage from "./ShiftFormWage";
import { mount } from "enzyme";

describe("ShiftFormWage", () => {
  it("renders", () => {
    const wrapper = mount(<ShiftFormWage error="" />);
    expect(wrapper.find(".input-section_wage")).toHaveLength(1);
  });
  it("renders error message if there is an error", () => {
    const wrapper = mount(<ShiftFormWage error="Error message" />);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("renders NO error message if there is NO error", () => {
    const wrapper = mount(<ShiftFormWage error="" />);
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
});
