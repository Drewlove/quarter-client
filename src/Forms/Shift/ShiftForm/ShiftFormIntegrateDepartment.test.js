import React from "react";
import ShiftForm from "./ShiftForm";
import { shallow, mount } from "enzyme";
import { useAuth0 } from "@auth0/auth0-react";

const user = {
  email: "johndoe@me.com",
  email_verified: true,
  sub: "google-oauth2|2147627834623744883746",
};

jest.mock("@auth0/auth0-react");

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

describe("ShiftForm, Department", () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      user,
      logout: jest.fn(),
      loginWithRedirect: jest.fn(),
      getAccessTokenSilently: jest.fn(),
    });
  });
  it("Renders department section", () => {
    expect(wrapper.find(".form-section_department")).toHaveLength(1);
  });
  it("Renders all departments from data", () => {
    expect(wrapper.find(".option_shift-department")).toHaveLength(4);
  });
  it("Renders correct department names alphabetically", () => {
    expect(wrapper.find(".option_shift-department").at(0).text()).toBe(
      "- Select Department -"
    );
    expect(wrapper.find(".option_shift-department").at(1).text()).toBe(
      "doughs"
    );
    expect(wrapper.find(".option_shift-department").at(2).text()).toBe(
      "kitchen"
    );
    expect(wrapper.find(".option_shift-department").at(3).text()).toBe(
      "service"
    );
  });
  it("Associates accurate values with each department", () => {
    expect(wrapper.find(".option_shift-department").at(1).props().value).toBe(
      3
    );
    expect(wrapper.find(".option_shift-department").at(2).props().value).toBe(
      2
    );
    expect(wrapper.find(".option_shift-department").at(3).props().value).toBe(
      1
    );
  });
  it("Renders the selected department", () => {
    expect(wrapper.find(".form-section__input_department").props().value).toBe(
      "2"
    );
  });
  it("Updates the selected department based on user input", () => {
    const userEvent = {
      target: { name: "shift_department", value: "1" },
    };
    wrapper
      .find(".form-section__input_department")
      .simulate("change", userEvent);
    expect(wrapper.find(".form-section__input_department").props().value).toBe(
      "1"
    );
  });
});
