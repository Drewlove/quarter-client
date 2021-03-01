import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import * as MOCK_GET from "../../../Utilities/API_Methods/API_GET";
import ShiftFormContainer from "./ShiftFormContainer";

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

describe("ShiftFormContainer", () => {
  it("Renders loading indicator when isLoading is true", async () => {
    MOCK_GET.API_GET = jest.fn(() => {
      return [
        {
          isLoading: true,
          isLoaded: false,
          isError: false,
          data: [],
        },
        () => {},
      ];
    });
    let wrapper = mount(
      <MemoryRouter>
        <ShiftFormContainer />
      </MemoryRouter>
    );
    expect(wrapper.find(".loading-indicator")).toHaveLength(1);
  });
  it("Renders error when isError is true", async () => {
    MOCK_GET.API_GET = jest.fn(() => {
      return [
        {
          isLoading: false,
          isLoaded: false,
          isError: true,
          data: [],
        },
        () => {},
      ];
    });
    let wrapper = mount(
      <MemoryRouter>
        <ShiftFormContainer />
      </MemoryRouter>
    );
    expect(wrapper.find(".error")).toHaveLength(1);
  });
  it("Renders form and displays data when isLoaded is true", async () => {
    MOCK_GET.API_GET = jest.fn(() => {
      return [
        {
          isLoading: false,
          isLoaded: true,
          isError: false,
          data: dummyData,
        },
        () => {},
      ];
    });
    let wrapper = mount(
      <MemoryRouter initialEntries={["/form/role/1"]}>
        <ShiftFormContainer />
      </MemoryRouter>
    );
    expect(wrapper.find(".form_shift")).toHaveLength(1);
    expect(wrapper.find(".input-section__input_department").props().value).toBe(
      "2"
    );
    expect(wrapper.find(".input-section__input_role").props().value).toBe("4");
    expect(wrapper.find(".input-section__input_people").props().value).toBe(2);
    expect(wrapper.find(".input-section__input_wage").props().value).toBe(
      "13.50"
    );
    expect(
      wrapper.find(".input-section__input_payroll-tax").props().value
    ).toBe("7.65");
    expect(wrapper.find(".input-section__input_time").at(0).props().value).toBe(
      "09:00:00"
    );
    expect(wrapper.find(".input-section__input_time").at(1).props().value).toBe(
      "16:30:00"
    );

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
});
