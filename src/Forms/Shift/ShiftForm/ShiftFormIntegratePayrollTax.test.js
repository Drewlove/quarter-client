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
  payroll_tax: "7.65",
  shift_start: "09:00:00",
  shift_end: "16:30:00",
  shift_day: [0, 2, 4],
};

const dummyData = [departments, roles, shift];

let wrapper;
beforeEach(() => {
  wrapper = mount(<ShiftForm data={dummyData} id={1} />);
});

describe("ShiftForm, payroll tax", () => {
  it("Renders", () => {
    expect(wrapper.find(".form-section_payroll-tax")).toHaveLength(1);
  });
  it("Renders value", () => {
    expect(wrapper.find(".form-section__input_payroll-tax").props().value).toBe(
      "7.65"
    );
  });
  it("Renders updated value based on user input", () => {
    const userEvent = { target: { name: "payroll_tax", value: "8.50" } };
    wrapper
      .find(".form-section__input_payroll-tax")
      .simulate("change", userEvent);
    expect(wrapper.find(".form-section__input_payroll-tax").props().value).toBe(
      "8.50"
    );
  });
  it("Rounds value on blur if value has more than two digits to right of decimal point", () => {
    const userEvent = { target: { name: "wage", value: "9.123" } };
    wrapper
      .find(".form-section__input_payroll-tax")
      .simulate("change", userEvent);
    wrapper.find(".form-section__input_payroll-tax").simulate("blur");
    expect(wrapper.find(".form-section__input_payroll-tax").props().value).toBe(
      "9.12"
    );
  });
  it("Renders two numbers to right of decimal point if one or zero numbers to right of decimal point are entered", () => {
    const userEvent = { target: { name: "payroll_tax", value: "9.1" } };
    wrapper
      .find(".form-section__input_payroll-tax")
      .simulate("change", userEvent);
    wrapper.find(".form-section__input_payroll-tax").simulate("blur");
    expect(wrapper.find(".form-section__input_payroll-tax").props().value).toBe(
      "9.10"
    );
  });
});
