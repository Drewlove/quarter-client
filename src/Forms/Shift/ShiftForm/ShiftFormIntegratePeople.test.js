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

describe("ShiftForm, people", () => {
  it("Renders", () => {
    expect(wrapper.find(".form-section__input_people")).toHaveLength(1);
  });
  it("Renders value", () => {
    expect(wrapper.find(".form-section__input_people").props().value).toBe(2);
  });
  it("Renders updated value based on user input", () => {
    const userEvent = { target: { name: "people", value: "3" } };
    wrapper.find(".form-section__input_people").simulate("change", userEvent);
    expect(wrapper.find(".form-section__input_people").props().value).toBe("3");
  });
  it("Renders error if value is an empty string", () => {
    const userEvent = { target: { name: "people", value: "" } };
    wrapper.find(".form-section__input_people").simulate("change", userEvent);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("Renders error if value is set to 0", () => {
    const userEvent = { target: { name: "people", value: "0" } };
    wrapper.find(".form-section__input_people").simulate("change", userEvent);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
});
