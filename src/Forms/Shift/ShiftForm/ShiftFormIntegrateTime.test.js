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

describe("ShiftForm, start and end time", () => {
  it("Renders", () => {
    expect(wrapper.find(".input-section_time")).toHaveLength(2);
  });
  it("Renders start value", () => {
    expect(wrapper.find(".input-section__input_time").at(0).props().value).toBe(
      "09:00:00"
    );
  });
  it("Renders end value", () => {
    expect(wrapper.find(".input-section__input_time").at(1).props().value).toBe(
      "16:30:00"
    );
  });
  it("Renders updated value for start time based on user input", () => {
    const userEvent = { target: { name: "shift_start", value: "12:00:00" } };
    wrapper
      .find(".input-section__input_time")
      .at(0)
      .simulate("change", userEvent);
    expect(wrapper.find(".input-section__input_time").at(0).props().value).toBe(
      "12:00:00"
    );
  });
  it("Renders updated value for end time based on user input", () => {
    const userEvent = { target: { name: "shift_end", value: "17:30:00" } };
    wrapper
      .find(".input-section__input_time")
      .at(1)
      .simulate("change", userEvent);
    expect(wrapper.find(".input-section__input_time").at(1).props().value).toBe(
      "17:30:00"
    );
  });
  it("Renders one error if start value is an empty string", () => {
    const userEvent = { target: { name: "shift_start", value: "" } };
    wrapper
      .find(".input-section__input_time")
      .at(0)
      .simulate("change", userEvent);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("Renders two errors if start value and end value is an empty string", () => {
    const userEventStart = { target: { name: "shift_start", value: "" } };
    const userEventEnd = { target: { name: "shift_end", value: "" } };
    wrapper
      .find(".input-section__input_time")
      .at(0)
      .simulate("change", userEventStart);
    wrapper
      .find(".input-section__input_time")
      .at(1)
      .simulate("change", userEventEnd);
    expect(wrapper.find(".form-error")).toHaveLength(2);
  });
});
