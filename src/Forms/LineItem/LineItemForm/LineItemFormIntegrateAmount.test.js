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

describe("LineItemForm, Amount", () => {
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
    expect(wrapper.find(".form-section_amount")).toHaveLength(1);
  });
  it("If value is given, the value renders", () => {
    const wrapper = mount(
      <LineItemForm data={dummyDataLineItemDollar} rowId="1" />
    );
    expect(wrapper.find(".form-section_amount input").props().value).toBe(
      "1,000.25"
    );
  });
  it("If no value is given, then no value renders", () => {
    const wrapper = mount(
      <LineItemForm data={dummyDataBlankForm} rowId="new" />
    );
    expect(wrapper.find(".form-section_amount input").props().value).toBe("");
  });

  it("If input value is changed, then changed value renders", () => {
    const wrapper = mount(
      <LineItemForm data={dummyDataLineItemDollar} rowId="1" />
    );
    wrapper.find(".form-section_amount input").simulate("change", {
      target: {
        name: "line_item_amount",
        value: "99.65",
      },
    });
    expect(wrapper.find(".form-section_amount input").props().value).toBe(
      "99.65"
    );
  });
  it("If input has focus, then blurs focus with no value, error component renders", () => {
    const wrapper = mount(
      <LineItemForm data={dummyDataBlankForm} rowId="new" />
    );
    wrapper.find(".form-section_amount input").simulate("focus");
    wrapper.find(".form-section_amount input").simulate("blur");
    expect(wrapper.find(".form-section_amount .form-error")).toHaveLength(1);
  });
  it("If input is changed to a negative value and then user blurs focus, error component renders", () => {
    const wrapper = mount(
      <LineItemForm data={dummyDataLineItemDollar} rowId="1" />
    );
    wrapper.find(".form-section_amount input").simulate("change", {
      target: {
        name: "line_item_amount",
        value: "-1",
      },
    });
    wrapper.find(".form-section_amount input").simulate("blur");
    expect(wrapper.find(".form-section_amount .form-error")).toHaveLength(1);
  });
  it("If input is changed to value greater than 9,999,999.99 and then user blurs focus, error component renders", () => {
    const wrapper = mount(
      <LineItemForm data={dummyDataLineItemDollar} rowId="1" />
    );
    wrapper.find(".form-section_amount input").simulate("change", {
      target: {
        name: "line_item_amount",
        value: "10,000,000.00",
      },
    });
    wrapper.find(".form-section_amount input").simulate("blur");
    expect(wrapper.find(".form-section_amount .form-error")).toHaveLength(1);
  });
});
