import React from "react";
import ShiftFormTime from "./ShiftFormTime";
import { mount } from "enzyme";

describe("ShiftFormTime", () => {
  it("Renders", () => {
    const wrapper = mount(<ShiftFormTime />);
    expect(wrapper.find(".input-section_time")).toHaveLength(2);
  });
  it("Renders error message for 'start time' if there is an error", () => {
    const wrapper = mount(<ShiftFormTime formErrorStart="Error message" />);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("Renders error message for 'end time' if there is an error", () => {
    const wrapper = mount(<ShiftFormTime formErrorEnd="Error message" />);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("Renders no error messages if no errors", () => {
    const wrapper = mount(<ShiftFormTime formErrorStart="" formErrorEnd="" />);
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
});
