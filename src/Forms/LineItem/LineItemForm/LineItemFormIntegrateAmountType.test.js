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
  amount: "25.00",
  line_item_amount_type: "percent",
  line_item_category: "cogs",
  line_item_id: 3,
  line_item_name: "Food",
  percent_of: 1,
};

const dummyDataLineItemDollar = [lineItems, lineItemDollar];
const dummyDataLineItemPercent = [lineItems, lineItemPercent];
const dummyDataBlankForm = [lineItems];

const categories = ["Sales", "COGS", "Overhead"];

describe("LineItemForm, AmountType", () => {
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
    expect(wrapper.find(".form-section_amount-type")).toHaveLength(1);
  });
  it("if new line item form, default value is set to dollars", () => {
    const wrapper = mount(
      <LineItemForm data={dummyDataBlankForm} rowId="new" />
    );
    expect(wrapper.find("#dollars").props().checked).toBe(true);
    expect(wrapper.find("#percent").props().checked).toBe(false);
  });
  it("if value is 'dollars', dollar input is checked", () => {
    const wrapper = mount(
      <LineItemForm data={dummyDataLineItemDollar} rowId="1" />
    );
    expect(wrapper.find("#dollars").props().checked).toBe(true);
    expect(wrapper.find("#percent").props().checked).toBe(false);
  });
  it("if value is 'percent', percent input is checked", () => {
    const wrapper = mount(
      <LineItemForm data={dummyDataLineItemPercent} rowId="3" />
    );
    expect(wrapper.find("#percent").props().checked).toBe(true);
    expect(wrapper.find("#dollars").props().checked).toBe(false);
  });
  it("if user changes value from dollar to percent, register new value", () => {
    const wrapper = mount(
      <LineItemForm data={dummyDataLineItemDollar} rowId="1" />
    );
    wrapper.find("#percent").simulate("change", {
      target: { name: "line_item_amount_type", value: "percent" },
    });
    expect(wrapper.find("#percent").props().checked).toBe(true);
    expect(wrapper.find("#dollars").props().checked).toBe(false);
  });
});
