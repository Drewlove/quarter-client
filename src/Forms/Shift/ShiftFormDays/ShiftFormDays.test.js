import React from "react";
import ShiftFormDays from "./ShiftFormDays";
import { mount, shallow } from "enzyme";

describe("ShiftFormDays", () => {
  const days = [0, 1, 2];
  it("renders", () => {
    const wrapper = shallow(<ShiftFormDays days={days} formError="" />);
    expect(wrapper.find(".form-section_days")).toHaveLength(1);
  });
  it("Checkboxes that should be checked, are checked", () => {
    const wrapper = shallow(<ShiftFormDays days={days} formError="" />);
    expect(wrapper.find(".toggle-container__input").at(0).props().checked).toBe(
      true
    );
    expect(wrapper.find(".toggle-container__input").at(1).props().checked).toBe(
      true
    );
    expect(wrapper.find(".toggle-container__input").at(2).props().checked).toBe(
      true
    );
  });
  it("Checkboxes that should not be checked, are not checked", () => {
    const wrapper = shallow(<ShiftFormDays days={days} formError="" />);
    expect(wrapper.find(".toggle-container__input").at(3).props().checked).toBe(
      false
    );
    expect(wrapper.find(".toggle-container__input").at(4).props().checked).toBe(
      false
    );
    expect(wrapper.find(".toggle-container__input").at(5).props().checked).toBe(
      false
    );
    expect(wrapper.find(".toggle-container__input").at(6).props().checked).toBe(
      false
    );
  });
  it("Renders an error message if no days have been selected", () => {
    const wrapper = mount(
      <ShiftFormDays
        days={[]}
        formError="Select at least one day."
        handleChangeDay={() => null}
      />
    );
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
});
