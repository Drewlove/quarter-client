import React from "react";
import ShiftFormTime from "./ShiftFormTime";
import { mount, shallow } from "enzyme";

describe("ShiftFormTime", () => {
  it("Renders", () => {
    const wrapper = mount(<ShiftFormTime />);
    expect(wrapper.find(".form-section_time")).toHaveLength(2);
  });
  it("Renders the start time accurately", () => {
    const wrapper = mount(
      <ShiftFormTime handleChange={() => null} startTime="09:00:00" />
    );
    expect(wrapper.find(".form-section__input_time").at(0).props().value).toBe(
      "09:00:00"
    );
  });
  it("Renders the end time accurately", () => {
    const wrapper = mount(
      <ShiftFormTime handleChange={() => null} endTime="17:00:00" />
    );
    expect(wrapper.find(".form-section__input_time").at(1).props().value).toBe(
      "17:00:00"
    );
  });
  it("Renders error message for 'start time' if there is an error", () => {
    const wrapper = mount(
      <ShiftFormTime handleChange={() => null} formErrorStart="Error message" />
    );
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("Renders error message for 'end time' if there is an error", () => {
    const wrapper = mount(
      <ShiftFormTime handleChange={() => null} formErrorEnd="Error message" />
    );
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("Renders no error messages if no errors", () => {
    const wrapper = mount(
      <ShiftFormTime
        handleChange={() => null}
        formErrorStart=""
        formErrorEnd=""
      />
    );
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
});
