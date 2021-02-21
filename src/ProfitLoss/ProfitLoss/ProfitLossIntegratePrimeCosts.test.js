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
    line_item_name: "Utilities",
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
    shift_day: [0, 1, 2, 3, 4],
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
    shift_day: [0, 1, 2, 3, 4],
    shift_department: 2,
    shift_start: "07:00:00",
    shift_end: "15:00:00",
    shift_id: 2,
    shift_role: 1,
    wage: "15.00",
  },
];

describe("ProfitLoss, Prime Cost", () => {
  it("renders category name", () => {
    const wrapper = mount(
      <MemoryRouter>
        <ProfitLoss data={[lineItems, shifts]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".fieldset__header").at(4).text()).toBe("Prime Costs");
  });
  it("renders prime costs in dollars, with label", () => {
    const wrapper = mount(
      <MemoryRouter>
        <ProfitLoss data={[lineItems, shifts]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".fieldset__item-text").at(13).text()).toBe(
      "Prime Costs"
    );
    expect(wrapper.find(".fieldset__amount").at(195).text()).toBe("$");
    expect(wrapper.find(".fieldset__amount").at(196).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(197).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(198).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(199).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(200).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(201).text()).toBe("9");
    expect(wrapper.find(".fieldset__amount").at(202).text()).toBe("4");
    expect(wrapper.find(".fieldset__amount").at(203).text()).toBe(",");
    expect(wrapper.find(".fieldset__amount").at(204).text()).toBe("7");
    expect(wrapper.find(".fieldset__amount").at(205).text()).toBe("8");
    expect(wrapper.find(".fieldset__amount").at(206).text()).toBe("4");
    expect(wrapper.find(".fieldset__amount").at(207).text()).toBe(".");
    expect(wrapper.find(".fieldset__amount").at(208).text()).toBe("6");
    expect(wrapper.find(".fieldset__amount").at(209).text()).toBe("0");
  });
  it("renders prime costs in dollars, with label", () => {
    const wrapper = mount(
      <MemoryRouter>
        <ProfitLoss data={[lineItems, shifts]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".fieldset__item-text").at(14).text()).toBe(
      "Prime Costs"
    );
    expect(wrapper.find(".fieldset__amount").at(210).text()).toBe("%");
    expect(wrapper.find(".fieldset__amount").at(211).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(212).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(213).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(214).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(215).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(216).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(217).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(218).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(219).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(220).text()).toBe("4");
    expect(wrapper.find(".fieldset__amount").at(221).text()).toBe("9");
    expect(wrapper.find(".fieldset__amount").at(222).text()).toBe(".");
    expect(wrapper.find(".fieldset__amount").at(223).text()).toBe("3");
    expect(wrapper.find(".fieldset__amount").at(224).text()).toBe("7");
  });
});
