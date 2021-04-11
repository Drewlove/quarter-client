import React from "react";
import { mount } from "enzyme";
import LineItemForm from "./LineItemForm";
import { useAuth0 } from "@auth0/auth0-react";

const user = {
  email: "johndoe@me.com",
  email_verified: true,
  sub: "google-oauth2|2147627834623744883746",
};

jest.mock("@auth0/auth0-react");

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

describe("LineItemForm", () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      user,
      logout: jest.fn(),
      loginWithRedirect: jest.fn(),
      getAccessTokenSilently: jest.fn(),
    });
  });
  it("renders", () => {
    const wrapper = mount(
      <LineItemForm data={dummyDataLineItemDollar} rowId="1" />
    );
    expect(wrapper.find(LineItemForm)).toHaveLength(1);
  });
  it("renders four inputs", () => {
    const wrapper = mount(
      <LineItemForm data={dummyDataLineItemDollar} rowId="1" />
    );
    expect(wrapper.find("input")).toHaveLength(4);
  });
  it("if fetched line item has a null percent_of value, then renders one select tag", () => {
    const wrapper = mount(
      <LineItemForm data={dummyDataLineItemDollar} rowId="1" />
    );
    expect(wrapper.find("select")).toHaveLength(1);
  });
  it("if fetched line item has a percent_of value, then renders two select tags", () => {
    const wrapper = mount(<LineItemForm data={dummyDataLineItemPercent} />);
    expect(wrapper.find("select")).toHaveLength(2);
  });
  it("if user clicks save on a blank form and all fields are empty, renders three errors", () => {
    const wrapper = mount(
      <LineItemForm data={dummyDataBlankForm} rowId="new" />
    );
    wrapper.find("#button-save").simulate("click");
    expect(wrapper.find(".form-error")).toHaveLength(3);
  });
  it("if user clicks save, and amount type is set to 'percent of', and all fields are empty, renders four errors", () => {
    const wrapper = mount(
      <LineItemForm data={dummyDataBlankForm} rowId="new" />
    );
    wrapper.find("#percent").simulate("change", {
      target: { name: "line_item_amount_type", value: "percent" },
    });
    wrapper.find("#button-save").simulate("click");
    expect(wrapper.find(".form-error")).toHaveLength(4);
  });
});
