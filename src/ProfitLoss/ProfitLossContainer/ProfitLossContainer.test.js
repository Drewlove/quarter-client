import React from "react";
import { mount } from "enzyme";
import ProfitLossContainer from "./ProfitLossContainer";
import * as CONSTANTS from "../../Authentication/useAuthId";
import { MemoryRouter } from "react-router-dom";
import * as MOCK_GET from "../../Utilities/API_Methods/API_GET";

describe("ProfitLossContainer", () => {
  CONSTANTS.useAuthId = jest.fn(() => "auth0|123");
  const dummyData = [
    [
      {
        line_item_category: "sales",
        line_item_id: 1,
        line_item_name: "Beverage",
        amount: "10000.00",
        line_item_amount_type: "dollars",
        percent_of: null,
      },
      {
        line_item_category: "sales",
        line_item_id: 2,
        line_item_name: "Food",
        amount: "182000.00",
        line_item_amount_type: "dollars",
        percent_of: null,
      },
      {
        line_item_category: "cogs",
        line_item_id: 3,
        line_item_name: "Food",
        amount: "30",
        line_item_amount_type: "percent",
        percent_of: 2,
      },
      {
        line_item_category: "cogs",
        line_item_id: 4,
        line_item_name: "Beverage",
        amount: "10",
        line_item_amount_type: "percent",
        percent_of: 1,
      },
      {
        line_item_category: "overhead",
        line_item_id: 5,
        line_item_name: "Rent",
        amount: "18000",
        line_item_amount_type: "dollars",
        percent_of: null,
      },
      {
        line_item_category: "overhead",
        line_item_id: 6,
        line_item_name: "Utilities",
        amount: "5000",
        line_item_amount_type: "dollars",
        percent_of: null,
      },
    ],
    [
      {
        department_name: "kitchen",
        payroll_tax: "7.65",
        people: 1,
        role_name: "head chef",
        shift_day: [(0, 1, 2, 3, 4)],
        shift_department: 1,
        shift_start: "07:00:00",
        shift_end: "15:00:00",
        shift_id: 1,
        shift_role: 4,
        wage: "25.00",
      },
      {
        department_name: "service",
        payroll_tax: "7.65",
        people: 3,
        role_name: "service swing",
        shift_day: [(0, 1, 2, 3, 4)],
        shift_department: 2,
        shift_start: "07:00:00",
        shift_end: "15:00:00",
        shift_id: 2,
        shift_role: 1,
        wage: "15.00",
      },
    ],
  ];

  const dummyDataEmpty = [];

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
        <ProfitLossContainer />
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
        <ProfitLossContainer />
      </MemoryRouter>
    );
    expect(wrapper.find(".error")).toHaveLength(1);
  });
  it("Renders 7 fieldset legends once data has been fetched from API", async () => {
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
      <MemoryRouter>
        <ProfitLossContainer />
      </MemoryRouter>
    );
    expect(wrapper.find(".fieldset__legend")).toHaveLength(7);
  });
});
