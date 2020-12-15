import React from "react";
import ShiftFormRole from "./ShiftFormRole";
import { mount } from "enzyme";

describe("ShiftFormRole", () => {
  it("renders", () => {
    const wrapper = mount(<ShiftFormRole error="" />);
    expect(wrapper.find(".input-section_shift").toHaveLength(1));
  });
  it("renders error message if there is an error", () => {
    const wrapper = mount(<ShiftFormRole error="Error message" />);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("renders NO error message if there is NO error", () => {
    const wrapper = mount(<ShiftFormRole error="" />);
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
});
