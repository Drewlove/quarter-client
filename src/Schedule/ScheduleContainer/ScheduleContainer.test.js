import React from "react";
import { mount } from "enzyme";
import ScheduleContainer from "./ScheduleContainer";
import * as CONSTANTS from "../../Authentication/UserId";
import { MemoryRouter } from "react-router-dom";
import * as MOCK_GET from "../../Utilities/API_Methods/API_GET";

describe("ScheduleContainer", () => {
  CONSTANTS.useAuthId = jest.fn(() => "auth0|123");
  const dummyData = [
    {
      shift_id: 1,
      shift_day: [0, 1, 2, 3, 4],
      shift_department: 1,
      shift_role: 4,
      shift_start: "7.00",
      shift_end: "15.00",
      people: 1,
      wage: "27.50",
      department_name: "kitchen",
      role_name: "head chef",
    },
    {
      shift_id: 9,

      shift_day: [3, 4, 5, 6],
      shift_department: 2,
      shift_role: 5,
      shift_start: "6.50",
      shift_end: "14.00",
      people: 2,
      wage: "13.50",
      department_name: "service",
      role_name: "line prep",
    },
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
        <ScheduleContainer user={() => "auth0|123"} />
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
        <ScheduleContainer />
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
          data: [dummyData],
        },
        () => {},
      ];
    });
    let wrapper = mount(
      <MemoryRouter>
        <ScheduleContainer />
      </MemoryRouter>
    );
    expect(wrapper.find(".schedule-row_department")).toHaveLength(2);
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
        <ScheduleContainer />
      </MemoryRouter>
    );
    expect(wrapper.find(".empty-list")).toHaveLength(1);
  });
});
