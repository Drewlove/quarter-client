import React from "react";
import ShiftFormWage from "./ShiftFormWage";
import { mount } from "enzyme";

describe("ShiftFormWage", () => {
  it("Renders", () => {
    const wrapper = mount(
      <ShiftFormWage error="" handleChangeWage={() => null} />
    );
    expect(wrapper.find(".input-section_wage")).toHaveLength(1);
  });
  it("Renders the value correctly", () => {
    const wrapper = mount(
      <ShiftFormWage value="15.50" handleChangeWage={() => null} />
    );
    expect(wrapper.find(".input-section__input_wage").props().value).toBe(
      "15.50"
    );
  });
  it("Renders error message if there is an error", () => {
    const wrapper = mount(
      <ShiftFormWage formError="Error" handleChangeWage={() => null} />
    );
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("Renders NO error message if there is NO error", () => {
    const wrapper = mount(
      <ShiftFormWage formError="" handleChangeWage={() => null} />
    );
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
});
