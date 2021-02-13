import React from "react";
import ShiftForm from "./ShiftForm";
import { SUM_WEEKLY_SHIFT_TOTAL } from "../../../Utilities/UtilityFunctions";
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

describe("ShiftForm", () => {
  it("Renders", () => {
    const wrapper = mount(<ShiftForm data={dummyData} />);
    expect(wrapper.find(".form_shift")).toHaveLength(1);
  });
  it("Renders delete button if the id is a number", () => {
    const wrapper = mount(<ShiftForm data={dummyData} id={1} />);
    expect(wrapper.find(".delete-button-section")).toHaveLength(1);
  });
  it("Renders NO delete button if the id is 'new' ", () => {
    const wrapper = mount(<ShiftForm data={dummyData} id="new" />);
    expect(wrapper.find(".delete-button-section")).toHaveLength(0);
  });
  it("totals weekly shift cost", () => {
    const wrapper = mount(<ShiftForm data={dummyData} />);
    let sum = SUM_WEEKLY_SHIFT_TOTAL(shift);
    expect(wrapper.find(".form_shift__weekly-total").text()).toBe(
      `Weekly Total: $${parseFloat(sum).toFixed(2)}`
    );
  });
});
