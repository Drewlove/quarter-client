import React from "react";
import ShiftFormPeople from "./ShiftFormPeople";
import { mount } from "enzyme";

describe("ShiftFormPeople", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ShiftFormPeople error="" />);
  });

  it("renders", () => {
    const wrapper = mount(<ShiftFormPeople error="" />);
    expect(wrapper.find(".input-section_people")).toHaveLength(1);
  });
  it("renders error message if there is an error", () => {
    const wrapper = mount(<ShiftFormPeople error="Error message" />);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
});
