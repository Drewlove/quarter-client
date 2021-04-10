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

describe("ShiftForm, wage", () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      user,
      logout: jest.fn(),
      loginWithRedirect: jest.fn(),
      getAccessTokenSilently: jest.fn(),
    });
  });
  it("Renders", () => {
    expect(wrapper.find(".form-section_wage")).toHaveLength(1);
  });
  it("Renders value", () => {
    expect(wrapper.find(".form-section__input_wage").props().value).toBe(
      "13.50"
    );
  });
  it("Renders updated value based on user input", () => {
    const userEvent = { target: { name: "wage", value: "14.25" } };
    wrapper.find(".form-section__input_wage").simulate("change", userEvent);
    expect(wrapper.find(".form-section__input_wage").props().value).toBe(
      "14.25"
    );
  });
  it("Renders error on blur if value is an empty string", () => {
    const userEvent = { target: { name: "wage", value: "" } };
    wrapper.find(".form-section__input_wage").simulate("change", userEvent);
    wrapper.find(".form-section__input_wage").simulate("blur");
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("Renders error on blur if value is set to 0", () => {
    const userEvent = { target: { name: "wage", value: "0" } };
    wrapper.find(".form-section__input_wage").simulate("change", userEvent);
    wrapper.find(".form-section__input_wage").simulate("blur");
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("Rounds value on blur if value has more than two digits to right of decimal point", () => {
    const userEvent = { target: { name: "wage", value: "9.123" } };
    wrapper.find(".form-section__input_wage").simulate("change", userEvent);
    wrapper.find(".form-section__input_wage").simulate("blur");
    expect(wrapper.find(".form-section__input_wage").props().value).toBe(
      "9.12"
    );
  });
  it("Renders two numbers to right of decimal point if one or zero numbers to right of decimal point are entered", () => {
    const userEvent = { target: { name: "wage", value: "9.1" } };
    wrapper.find(".form-section__input_wage").simulate("change", userEvent);
    wrapper.find(".form-section__input_wage").simulate("blur");
    expect(wrapper.find(".form-section__input_wage").props().value).toBe(
      "9.10"
    );
  });
});
