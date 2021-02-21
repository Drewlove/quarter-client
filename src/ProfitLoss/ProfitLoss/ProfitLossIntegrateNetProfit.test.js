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
    amount: "18000.00",
    line_item_amount_type: "dollars",
    percent_of: null,
  },
  {
    line_item_category: "overhead",
    line_item_id: 6,
    line_item_name: "Utilities",
    amount: "5000.00",
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

describe("ProfitLoss, Net Profit", () => {
  it("renders category name", () => {
    const wrapper = mount(
      <MemoryRouter>
        <ProfitLoss data={[lineItems, shifts]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".fieldset__header").at(6).text()).toBe("Net Profit");
  });
  it("renders net profit in dollars, with label", () => {
    const wrapper = mount(
      <MemoryRouter>
        <ProfitLoss data={[lineItems, shifts]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".fieldset__item-text").at(19).text()).toBe(
      "Net Profit"
    );
    expect(wrapper.find(".fieldset__amount").at(285).text()).toBe("$");
    expect(wrapper.find(".fieldset__amount").at(286).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(287).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(288).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(289).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(290).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(291).text()).toBe("7");
    expect(wrapper.find(".fieldset__amount").at(292).text()).toBe("4");
    expect(wrapper.find(".fieldset__amount").at(293).text()).toBe(",");
    expect(wrapper.find(".fieldset__amount").at(294).text()).toBe("2");
    expect(wrapper.find(".fieldset__amount").at(295).text()).toBe("1");
    expect(wrapper.find(".fieldset__amount").at(296).text()).toBe("5");
    expect(wrapper.find(".fieldset__amount").at(297).text()).toBe(".");
    expect(wrapper.find(".fieldset__amount").at(298).text()).toBe("4");
    expect(wrapper.find(".fieldset__amount").at(299).text()).toBe("0");
  });
  it("renders net profit as a percentage of sales, with label", () => {
    const wrapper = mount(
      <MemoryRouter>
        <ProfitLoss data={[lineItems, shifts]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".fieldset__item-text").at(20).text()).toBe(
      "Net Profit"
    );
    expect(wrapper.find(".fieldset__amount").at(300).text()).toBe("%");
    expect(wrapper.find(".fieldset__amount").at(301).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(302).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(303).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(304).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(305).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(306).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(307).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(308).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(309).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(310).text()).toBe("3");
    expect(wrapper.find(".fieldset__amount").at(311).text()).toBe("8");
    expect(wrapper.find(".fieldset__amount").at(312).text()).toBe(".");
    expect(wrapper.find(".fieldset__amount").at(313).text()).toBe("6");
    expect(wrapper.find(".fieldset__amount").at(314).text()).toBe("5");
  });
});
