import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import * as MOCK_GET from "../../../Utilities/API_Methods/API_GET";
import RoleFormContainer from "./RoleFormContainer";

describe("RoleFormContainer", () => {
  const dummyData = [
    [
      { department_name: "kitchen", department_id: 1 },
      { department_name: "service", department_id: 2 },
    ],
    {
      role_name: "chef",
      role_id: 1,
      department_id: 2,
      department_name: "kitchen",
    },
  ];

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
        <RoleFormContainer />
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
        <RoleFormContainer />
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
        <RoleFormContainer />
      </MemoryRouter>
    );
    expect(wrapper.find(".form_role")).toHaveLength(1);
    expect(wrapper.find("#role").props().value).toBe("chef");
    expect(wrapper.find("#department").props().value).toBe("2");
  });
});
