import React from "react";
import ShiftForm from "./ShiftForm";
import { shallow, mount } from "enzyme";

const departments = [
  {
    department_id: 1,
    department_name: "service",
  },
  {
    department_id: 2,
    department_name: "kitchen",
  },
  {
    department_id: 3,
    department_name: "doughs",
  },
];

const roles = [
  {
    department_id: 1,
    department_name: "service",
    role_id: 1,
    role_name: "register",
  },
  {
    department_id: 1,
    department_name: "service",
    role_id: 2,
    role_name: "expediter",
  },
  {
    department_id: 2,
    department_name: "kitchen",
    role_id: 4,
    role_name: "sous chef",
  },
  {
    department_id: 2,
    department_name: "kitchen",
    role_id: 3,
    role_name: "head chef",
  },
];

const shift = {
  shift_id: 1,
  shift_department: "2",
  shift_role: "4",
  people: 2,
  wage: "13.50",
  shift_start: "09:00:00",
  shift_end: "16:30:00",
  shift_day: [0, 2, 4],
};

const dummyData = [departments, roles, shift];

let wrapper;
beforeEach(() => {
  wrapper = mount(<ShiftForm data={dummyData} id={1} />);
});

describe("ShiftForm, days", () => {
  it("Renders", () => {
    expect(wrapper.find(".input-section_days")).toHaveLength(1);
  });
  it("Renders which checkboxes are checked", () => {
    expect(
      wrapper.find(".toggle-container__input_days").at(0).props().checked
    ).toBe(true);
    expect(
      wrapper.find(".toggle-container__input_days").at(1).props().checked
    ).toBe(false);
    expect(
      wrapper.find(".toggle-container__input_days").at(2).props().checked
    ).toBe(true);
    expect(
      wrapper.find(".toggle-container__input_days").at(3).props().checked
    ).toBe(false);
    expect(
      wrapper.find(".toggle-container__input_days").at(4).props().checked
    ).toBe(true);
    expect(
      wrapper.find(".toggle-container__input_days").at(5).props().checked
    ).toBe(false);
    expect(
      wrapper.find(".toggle-container__input_days").at(6).props().checked
    ).toBe(false);
  });
  it("Updates which checkboxes are checked based on user checking another checkbox", () => {
    wrapper
      .find(".toggle-container__input_days")
      .at(6)
      .simulate("change", { target: { value: 6 } });
    expect(
      wrapper.find(".toggle-container__input_days").at(6).props().checked
    ).toBe(true);
  });
  it("Updates which checkboxes are checked based on user unchecking a checkbox", () => {
    wrapper
      .find(".toggle-container__input_days")
      .at(4)
      .simulate("change", { target: { value: 4 } });
    expect(
      wrapper.find(".toggle-container__input_days").at(6).props().checked
    ).toBe(false);
  });
  it("Renders an error if no checkboxes are checked", () => {
    wrapper
      .find(".toggle-container__input_days")
      .at(0)
      .simulate("change", { target: { value: 0 } });
    wrapper
      .find(".toggle-container__input_days")
      .at(2)
      .simulate("change", { target: { value: 2 } });
    wrapper
      .find(".toggle-container__input_days")
      .at(4)
      .simulate("change", { target: { value: 4 } });

    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
});
