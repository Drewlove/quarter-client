import React from "react";
import ShiftFormPeople from "./ShiftFormPeople";
import { mount } from "enzyme";

describe("ShiftFormPeople", () => {
  it("Renders", () => {
    const wrapper = mount(
      <ShiftFormPeople formError="" handleChange={() => null} />
    );
    expect(wrapper.find(".form-section_people")).toHaveLength(1);
  });
  it("Renders the value correctly", () => {
    const wrapper = mount(
      <ShiftFormPeople value="3" formError="" handleChange={() => null} />
    );
    expect(wrapper.find(".form-section__input_people").props().value).toBe("3");
  });
  it("Renders error message if there is an error", () => {
    const wrapper = mount(
      <ShiftFormPeople formError="Error message" handleChange={() => null} />
    );
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("Renders NO error message if there is NO error", () => {
    const wrapper = mount(
      <ShiftFormPeople formError="" handleChange={() => null} />
    );
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
});
