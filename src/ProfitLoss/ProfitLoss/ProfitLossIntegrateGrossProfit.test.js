import React from "react";
import ProfitLoss from "./ProfitLoss";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

const lineItems = [
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
    line_item_name: "Rent",
    amount: "5000",
    line_item_amount_type: "dollars",
    percent_of: null,
  },
];

const shifts = [
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
];

describe("ProfitLoss, Gross Profit", () => {
  it("renders category name", () => {
    const wrapper = mount(
      <MemoryRouter>
        <ProfitLoss data={[lineItems, shifts]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".fieldset__header").at(2).text()).toBe("Gross Profit");
  });
  it("renders gross profit amount with label", () => {
    const wrapper = mount(
      <MemoryRouter>
        <ProfitLoss data={[lineItems, shifts]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".fieldset__item-text").at(7).text()).toBe(
      "Gross Profit"
    );
    expect(wrapper.find(".fieldset__amount").at(105).text()).toBe("$");
    expect(wrapper.find(".fieldset__amount").at(106).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(107).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(108).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(109).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(110).text()).toBe("1");
    expect(wrapper.find(".fieldset__amount").at(111).text()).toBe("3");
    expect(wrapper.find(".fieldset__amount").at(112).text()).toBe("6");
    expect(wrapper.find(".fieldset__amount").at(113).text()).toBe(",");
    expect(wrapper.find(".fieldset__amount").at(114).text()).toBe("4");
    expect(wrapper.find(".fieldset__amount").at(115).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(116).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(117).text()).toBe(".");
    expect(wrapper.find(".fieldset__amount").at(118).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(119).text()).toBe("0");
  });
  it("renders gross profit as a percentage of sales with label", () => {
    const wrapper = mount(
      <MemoryRouter>
        <ProfitLoss data={[lineItems, shifts]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".fieldset__item-text").at(8).text()).toBe(
      "Gross Profit"
    );
    expect(wrapper.find(".fieldset__amount").at(120).text()).toBe("%");
    expect(wrapper.find(".fieldset__amount").at(121).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(122).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(123).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(124).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(125).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(126).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(127).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(128).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(129).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(130).text()).toBe("7");
    expect(wrapper.find(".fieldset__amount").at(131).text()).toBe("1");
    expect(wrapper.find(".fieldset__amount").at(132).text()).toBe(".");
    expect(wrapper.find(".fieldset__amount").at(133).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(134).text()).toBe("4");
  });
});
