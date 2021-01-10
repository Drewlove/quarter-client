import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import * as MOCK from "../../Utilities/HTTPmethods";

import DepartmentForm from "./DepartmentForm";

describe("DepartmentForm", () => {
  it("Renders Loading... when isLoading is true", async () => {
    MOCK.API_GET = jest.fn(() => {
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
        <DepartmentForm />
      </MemoryRouter>
    );
    expect(wrapper.find(".loading-indicator")).toHaveLength(1);
  });
  it("Does not render Loading... when isLoading is false", async () => {
    MOCK.API_GET = jest.fn(() => {
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
        <DepartmentForm />
      </MemoryRouter>
    );
    expect(wrapper.find(".loading-indicator")).toHaveLength(0);
  });

  it("Data correctly", async () => {
    MOCK.API_GET = jest.fn(() => {
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
        <DepartmentForm />
      </MemoryRouter>
    );
    expect(wrapper.find("#department").props().value).toBe("test name");
  });
