import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import * as MOCK_GET from "../../../Utilities/API_Methods/API_GET";
import LineItemFormContainer from "./LineItemFormContainer";
import * as CONSTANTS from "../../../Authentication/useAuthId";

const lineItems = [
  {
    amount: "1000.25",
    line_item_amount_type: "dollars",
    line_item_category: "sales",
    line_item_id: 1,
    line_item_name: "Food",
    percent_of: null,
  },
  {
    amount: "500.00",
    line_item_amount_type: "dollars",
    line_item_category: "sales",
    line_item_id: 2,
    line_item_name: "Beverage",
    percent_of: null,
  },
  {
    amount: "25",
    line_item_amount_type: "percent",
    line_item_category: "cogs",
    line_item_id: 3,
    line_item_name: "Food",
    percent_of: 1,
  },
  {
    amount: "15",
    line_item_amount_type: "percent",
    line_item_category: "cogs",
    line_item_id: 4,
    line_item_name: "Beverage",
    percent_of: 2,
  },
  {
    amount: "750.00",
    line_item_amount_type: "dollars",
    line_item_category: "overhead",
    line_item_id: 5,
    line_item_name: "Rent",
    percent_of: null,
  },
  {
    amount: "350.00",
    line_item_amount_type: "dollars",
    line_item_category: "overhead",
    line_item_id: 6,
    line_item_name: "Utilities",
    percent_of: null,
  },
];

const lineItemDollar = {
  amount: "1000.25",
  line_item_amount_type: "dollars",
  line_item_category: "sales",
  line_item_id: 1,
  line_item_name: "Food",
  percent_of: null,
};

const lineItemPercent = {
  amount: "25",
  line_item_amount_type: "percent",
  line_item_category: "cogs",
  line_item_id: 3,
  line_item_name: "Food",
  percent_of: 1,
};

const dummyDataLineItemDollar = [lineItems, lineItemDollar];
const dummyDataLineItemPercent = [lineItems, lineItemPercent];
const dummyDataBlankForm = [lineItems];

describe("LineItemFormContainer", () => {
  CONSTANTS.useAuthId = jest.fn(() => "123");
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
        <LineItemFormContainer />
      </MemoryRouter>
    );
    expect(wrapper.find(".main_skeleton")).toHaveLength(1);
  });
  it("Renders error when isError is true", async () => {
    MOCK_GET.API_GET = jest.fn(() => {
      return [
        {
          isLoading: false,
          isLoaded: false,
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
        <LineItemFormContainer />
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
          data: dummyDataLineItemDollar,
        },
        () => {},
      ];
    });
    let wrapper = mount(
      <MemoryRouter initialEntries={["form/line-item/1"]}>
        <LineItemFormContainer />
      </MemoryRouter>
    );
    expect(wrapper.find("select").at(0).props().value).toBe("sales");
    expect(wrapper.find("input").at(0).props().value).toBe("Food");
    expect(wrapper.find("#dollars").props().checked).toBe(true);
    expect(wrapper.find("input").at(3).props().value).toBe("1,000.25");
    expect(wrapper.find("select")).toHaveLength(1);
  });
});
