import React from "react";
import { mount } from "enzyme";
import LineItemForm from "./LineItemForm";
import { useAuth0 } from "@auth0/auth0-react";

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

const user = {
  email: "johndoe@me.com",
  email_verified: true,
  sub: "google-oauth2|2147627834623744883746",
};

jest.mock("@auth0/auth0-react");

const dummyDataLineItemDollar = [lineItems, lineItemDollar];
const dummyDataLineItemPercent = [lineItems, lineItemPercent];
const dummyDataBlankForm = [lineItems];

const categories = ["Sales", "COGS", "Overhead"];

describe("LineItemForm, Name", () => {
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
    expect(wrapper.find(".form-section_name")).toHaveLength(1);
  });
  it("If value is given, the value renders", () => {
    const wrapper = mount(
      <LineItemForm data={dummyDataLineItemDollar} rowId="1" />
    );
    expect(wrapper.find(".form-section_name input").props().value).toBe("Food");
  });
  it("If no value is given, then no value renders", () => {
    const wrapper = mount(
      <LineItemForm data={dummyDataBlankForm} rowId="new" />
    );
    expect(wrapper.find(".form-section_name input").props().value).toBe("");
  });
  it("If input value is changed, then changed value renders", () => {
    const wrapper = mount(
      <LineItemForm data={dummyDataLineItemDollar} rowId="1" />
    );
    wrapper.find(".form-section_name input").simulate("change", {
      target: {
        name: "line_item_name",
        value: "coffee",
      },
    });
    expect(wrapper.find(".form-section_name input").props().value).toBe(
      "coffee"
    );
  });
  it("If input has focus, then blurs focus with no value, error component renders", () => {
    const wrapper = mount(
      <LineItemForm data={dummyDataBlankForm} rowId="new" />
    );
    wrapper.find(".form-section_name input").simulate("focus");
    wrapper.find(".form-section_name input").simulate("blur");
    expect(wrapper.find(".form-section_name .form-error")).toHaveLength(1);
  });
  it("If input is changed from a value of 1 character or more to a value of 0 characters, error renders", () => {
    const wrapper = mount(
      <LineItemForm data={dummyDataLineItemDollar} rowId="1" />
    );
    wrapper.find(".form-section_name input").simulate("change", {
      target: {
        name: "line_item_name",
        value: "",
      },
    });
    expect(wrapper.find(".form-section_name .form-error")).toHaveLength(1);
  });
});
