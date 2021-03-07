import React from "react";
import { mount } from "enzyme";
import DepartmentsListContainer from "./DepartmentsListContainer";
import { MemoryRouter } from "react-router-dom";
import * as MOCK_GET from "../Utilities/API_Methods/API_GET";

describe("DepartmentsListContainer", () => {
  const dummyData = [
    { department_name: "kitchen", department_id: 1 },
    { department_name: "front of house", department_id: 2 },
  ];

  const dummyDataEmpty = [];

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
        <DepartmentsListContainer />
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
          data: [],
        },
        () => {},
      ];
    });
    let wrapper = mount(
      <MemoryRouter>
        <DepartmentsListContainer />
      </MemoryRouter>
    );
    expect(wrapper.find(".error")).toHaveLength(1);
  });
  it("Renders two departments when two departments are fetched from API", async () => {
    MOCK_GET.API_GET = jest.fn(() => {
      return [
        {
          isLoading: false,
          isLoaded: true,
          isError: false,
          data: [
            [
              { department_name: "kitchen", department_id: 1 },
              { department_name: "front of house", department_id: 2 },
            ],
          ],
        },
        () => {},
      ];
    });
    let wrapper = mount(
      <MemoryRouter>
        <DepartmentsListContainer />
      </MemoryRouter>
    );
    expect(wrapper.find(".fieldset__item-text")).toHaveLength(2);
  });
  it("Renders EmptyList when zero departments are fetched from API", async () => {
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
        <DepartmentsListContainer />
      </MemoryRouter>
    );
    expect(wrapper.find(".empty-list")).toHaveLength(1);
  });
});
