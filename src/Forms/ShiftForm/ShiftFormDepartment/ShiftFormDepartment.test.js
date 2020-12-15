import React from "react";
import ShiftFormDepartment from "./ShiftFormDepartment";
import { mount } from "enzyme";

describe("ShiftFormDepartment", () => {
  it("renders", () => {
    const wrapper = mount(<ShiftFormDepartment error="" />);
    expect(wrapper.find(".input-section_department")).toHaveLength(1);
  });
  it("renders error message if there is an error", () => {
    const wrapper = mount(<ShiftFormDepartment error="Error message" />);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("renders NO error message if there is NO error", () => {
    const wrapper = mount(<ShiftFormDepartment error="" />);
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
});
