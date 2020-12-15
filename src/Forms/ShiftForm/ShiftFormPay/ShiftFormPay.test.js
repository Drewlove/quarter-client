import React from "react";
import ShiftFormPay from "./ShiftFormPay";
import { mount } from "enzyme";

describe("ShiftFormPay", () => {
  it("renders", () => {
    const wrapper = mount(<ShiftFormPay error="" />);
    expect(wrapper.find(".input-section_shift").toHaveLength(1));
  });
  it("renders error message if there is an error", () => {
    const wrapper = mount(<ShiftFormPay error="Error message" />);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("renders NO error message if there is NO error", () => {
    const wrapper = mount(<ShiftFormPay error="" />);
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
});
