import React from "react";
import { mount } from "enzyme";
import RolesListContainer from "./RolesListContainer";
import * as CONSTANTS from "../Authentication/useAuthId";
import { MemoryRouter } from "react-router-dom";
import * as MOCK_GET from "../Utilities/API_Methods/API_GET";

const dummyData = [
  {
    role_name: "chef",
    role_id: 1,
    department_id: 1,
    department_name: "kitchen",
  },
  {
    role_name: "doughs",
    role_id: 5,
    department_id: 3,
    department_name: "production",
  },
  {
    role_name: "expediter",
    role_id: 3,
    department_id: 2,
    department_name: "service",
  },
  {
    role_name: "register",
    role_id: 4,
    department_id: 2,
    department_name: "service",
  },
  {
    role_name: "shaping",
    role_id: 6,
    department_id: 3,
    department_name: "production",
  },
  {
    role_name: "sous chef",
    role_id: 2,
    department_id: 1,
    department_name: "kitchen",
  },
];

describe("RolesListContainer", () => {
  CONSTANTS.useAuthId = jest.fn(() => "auth0|123");
  it("Renders skeleton loading indicator when isLoading is true", async () => {
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
        <RolesListContainer />
      </MemoryRouter>
    );
    expect(wrapper.find(".main_skeleton")).toHaveLength(1);
  });
  it("Renders error when isError is true", async () => {
    MOCK_GET.API_GET = jest.fn(() => {
      return [
        {
          isLoading: false,
          isLoaded: true,
          isError: true,
          error: {
            status: 401,
            statusText: "failed to load.",
          },
          data: [],
        },
        () => {},
      ];
    });
    let wrapper = mount(
      <MemoryRouter>
        <RolesListContainer />
      </MemoryRouter>
    );
    expect(wrapper.find(".error")).toHaveLength(1);
  });
  it("Renders EmptyList when zero roles are fetched from API", async () => {
    MOCK_GET.API_GET = jest.fn(() => {
      return [
        {
          isLoading: false,
          isLoaded: true,
          isError: false,
          data: [[]],
        },
        () => {},
      ];
    });
    let wrapper = mount(
      <MemoryRouter>
        <RolesListContainer />
      </MemoryRouter>
    );
    expect(wrapper.find(".empty-list")).toHaveLength(1);
  });
});

describe("RolesListContainer: displaying data", () => {
  it("Organizes roles by department, and displays roles under each department heading, department: 'kitchen'", () => {
    MOCK_GET.API_GET = jest.fn(() => {
      return [
        {
          isLoading: false,
          isLoaded: true,
          isError: false,
          data: [dummyData],
        },
        () => {},
      ];
    });
    const wrapper = mount(
      <MemoryRouter>
        <RolesListContainer />
      </MemoryRouter>
    );
    expect(wrapper.find(".roles-list-item__department").at(0).text()).toBe(
      "kitchen"
    );
    expect(wrapper.find(".fieldset__item-text").at(0).text()).toBe("chef");
    expect(wrapper.find(".fieldset__item-text").at(1).text()).toBe("sous chef");
  });
  it("Organizes roles by department, and displays roles under each department heading, department: 'kitchen'", () => {
    MOCK_GET.API_GET = jest.fn(() => {
      return [
        {
          isLoading: false,
          isLoaded: true,
          isError: false,
          data: [dummyData],
        },
        () => {},
      ];
    });
    const wrapper = mount(
      <MemoryRouter>
        <RolesListContainer />
      </MemoryRouter>
    );
    expect(wrapper.find(".roles-list-item__department").at(1).text()).toBe(
      "production"
    );
    expect(wrapper.find(".fieldset__item-text").at(2).text()).toBe("doughs");
    expect(wrapper.find(".fieldset__item-text").at(3).text()).toBe("shaping");
  });
  it("Organizes roles by department, and displays roles under each department heading, department: 'kitchen'", () => {
    MOCK_GET.API_GET = jest.fn(() => {
      return [
        {
          isLoading: false,
          isLoaded: true,
          isError: false,
          data: [dummyData],
        },
        () => {},
      ];
    });
    const wrapper = mount(
      <MemoryRouter>
        <RolesListContainer />
      </MemoryRouter>
    );
    expect(wrapper.find(".roles-list-item__department").at(2).text()).toBe(
      "service"
    );
    expect(wrapper.find(".fieldset__item-text").at(4).text()).toBe("expediter");
    expect(wrapper.find(".fieldset__item-text").at(5).text()).toBe("register");
  });
});
