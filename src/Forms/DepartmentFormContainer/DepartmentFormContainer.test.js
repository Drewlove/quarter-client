import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import * as MOCK_GET from "../../Utilities/API_Methods/API_GET";
import DepartmentFormContainer from "./DepartmentFormContainer";

describe("DepartmentFormContainer", () => {
  it("Renders loading indicator when isLoading is true", async () => {
    MOCK_GET.API_GET = jest.fn(() => {
      return [
        {
          data: null,
          isLoading: true,
          isError: false,
        },
        () => {},
      ];
    });
    let wrapper = mount(
      <MemoryRouter>
        <DepartmentFormContainer />
      </MemoryRouter>
    );
    expect(wrapper.find(".loading-indicator")).toHaveLength(1);
  });
  it("Does not render loading indicator when isLoading is false", async () => {
    MOCK_GET.API_GET = jest.fn(() => {
      return [
        {
          data: {},
          isLoading: false,
          isError: false,
        },
        () => {},
      ];
    });
    let wrapper = mount(
      <MemoryRouter>
        <DepartmentFormContainer />
      </MemoryRouter>
    );
    expect(wrapper.find(".loading-indicator")).toHaveLength(0);
  });
  it("Renders error when isError is true", async () => {
    MOCK_GET.API_GET = jest.fn(() => {
      return [
        {
          data: {},
          isLoading: false,
          isError: true,
        },
        () => {},
      ];
    });
    let wrapper = mount(
      <MemoryRouter>
        <DepartmentFormContainer />
      </MemoryRouter>
    );
    expect(wrapper.find(".loading-error")).toHaveLength(1);
  });
  it("Does not render error when isError is false", async () => {
    MOCK_GET.API_GET = jest.fn(() => {
      return [
        {
          data: {},
          isLoading: false,
          isError: false,
        },
        () => {},
      ];
    });
    let wrapper = mount(
      <MemoryRouter>
        <DepartmentFormContainer />
      </MemoryRouter>
    );
    expect(wrapper.find(".loading-error")).toHaveLength(0);
  });

  it("Renders data correctly", async () => {
    MOCK_GET.API_GET = jest.fn(() => {
      return [
        {
          data: { department_name: "test name", department_id: 1 },
          isLoading: false,
          isError: false,
        },
        () => {},
      ];
    });
    let wrapper = mount(
      <MemoryRouter>
        <DepartmentFormContainer />
      </MemoryRouter>
    );
    expect(wrapper.find("#department").props().value).toBe("test name");
  });
});
