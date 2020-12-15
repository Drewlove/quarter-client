import React from "react";
import ShiftFormTime from "./ShiftFormTime";
import { mount } from "enzyme";

describe("ShiftFormTime", () => {
  it("renders", () => {
    const wrapper = mount(<ShiftFormTime />);
    expect(wrapper.find(".input-section_shift")).toHaveLength(2);
  });
  it("renders error message for 'start time' if there is an error", () => {
    const wrapper = mount(<ShiftFormTime errorStart="Error message" />);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("renders error message for 'end time' if there is an error", () => {
    const wrapper = mount(<ShiftFormTime errorEnd="Error message" />);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
});
