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

describe("ShiftForm, Role", () => {
  it("Renders role section", () => {
    expect(wrapper.find(".form-section_role")).toHaveLength(1);
  });
  it("Renders all roles from data", () => {
    expect(wrapper.find(".option_shift-role")).toHaveLength(3);
  });
  it("Renders correct role names alphabetically", () => {
    expect(wrapper.find(".option_shift-role").at(0).text()).toBe(
      "- Select Role -"
    );
    expect(wrapper.find(".option_shift-role").at(1).text()).toBe("head chef");
    expect(wrapper.find(".option_shift-role").at(2).text()).toBe("sous chef");
  });
  it("Associates accurate values with each role", () => {
    expect(wrapper.find(".option_shift-role").at(1).props().value).toBe("3");
    expect(wrapper.find(".option_shift-role").at(2).props().value).toBe("4");
  });
  it("Renders the selected role", () => {
    expect(wrapper.find(".form-section__input_role").props().value).toBe("4");
  });
  it("Updates the list of available roles to correspond with user selected department", () => {
    const userEvent = {
      target: { name: "shift_department", value: "1" },
    };
    wrapper.find(".form-section__input_role").simulate("change", userEvent);
    expect(wrapper.find(".option_shift-role").at(1).props().value).toBe("2");
    expect(wrapper.find(".option_shift-role").at(2).props().value).toBe("1");
  });
  it("Updates the selected role based on user input", () => {
    const userEvent = {
      target: { name: "shift_role", value: "3" },
    };
    wrapper.find(".form-section__input_role").simulate("change", userEvent);
    expect(wrapper.find(".form-section__input_role").props().value).toBe("3");
  });
});
