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

describe("ProfitLoss, Direct Labor", () => {
  it("renders category name", () => {
    const wrapper = mount(
      <MemoryRouter>
        <ProfitLoss data={[lineItems, shifts]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".fieldset__header").at(5).text()).toBe("Overhead");
  });
  it("renders first line item amount and text", () => {
    const wrapper = mount(
      <MemoryRouter>
        <ProfitLoss data={[lineItems, shifts]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".fieldset__item-text").at(15).text()).toBe("Rent");
    expect(wrapper.find(".fieldset__amount").at(225).text()).toBe("$");
    expect(wrapper.find(".fieldset__amount").at(226).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(227).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(228).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(229).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(230).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(231).text()).toBe("1");
    expect(wrapper.find(".fieldset__amount").at(232).text()).toBe("8");
    expect(wrapper.find(".fieldset__amount").at(233).text()).toBe(",");
    expect(wrapper.find(".fieldset__amount").at(234).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(235).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(236).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(237).text()).toBe(".");
    expect(wrapper.find(".fieldset__amount").at(238).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(239).text()).toBe("0");
  });
  it("renders second line item amount and text", () => {
    const wrapper = mount(
      <MemoryRouter>
        <ProfitLoss data={[lineItems, shifts]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".fieldset__item-text").at(16).text()).toBe(
      "Utilities"
    );
    expect(wrapper.find(".fieldset__amount").at(240).text()).toBe("$");
    expect(wrapper.find(".fieldset__amount").at(241).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(242).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(243).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(244).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(245).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(246).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(247).text()).toBe("5");
    expect(wrapper.find(".fieldset__amount").at(248).text()).toBe(",");
    expect(wrapper.find(".fieldset__amount").at(249).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(250).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(251).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(252).text()).toBe(".");
    expect(wrapper.find(".fieldset__amount").at(253).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(254).text()).toBe("0");
  });

  it("renders total overhead in dollars, with label", () => {
    const wrapper = mount(
      <MemoryRouter>
        <ProfitLoss data={[lineItems, shifts]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".fieldset__item-text").at(17).text()).toBe("Overhead");
    expect(wrapper.find(".fieldset__amount").at(255).text()).toBe("$");
    expect(wrapper.find(".fieldset__amount").at(256).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(257).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(258).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(259).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(260).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(261).text()).toBe("2");
    expect(wrapper.find(".fieldset__amount").at(262).text()).toBe("3");
    expect(wrapper.find(".fieldset__amount").at(263).text()).toBe(",");
    expect(wrapper.find(".fieldset__amount").at(264).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(265).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(266).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(267).text()).toBe(".");
    expect(wrapper.find(".fieldset__amount").at(268).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(269).text()).toBe("0");
  });
  it("renders total overhead as a percentage of sales, with label", () => {
    const wrapper = mount(
      <MemoryRouter>
        <ProfitLoss data={[lineItems, shifts]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".fieldset__item-text").at(18).text()).toBe("Overhead");
    expect(wrapper.find(".fieldset__amount").at(270).text()).toBe("%");
    expect(wrapper.find(".fieldset__amount").at(271).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(272).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(273).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(274).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(275).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(276).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(277).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(278).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(279).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(280).text()).toBe("1");
    expect(wrapper.find(".fieldset__amount").at(281).text()).toBe("1");
    expect(wrapper.find(".fieldset__amount").at(282).text()).toBe(".");
    expect(wrapper.find(".fieldset__amount").at(283).text()).toBe("9");
    expect(wrapper.find(".fieldset__amount").at(284).text()).toBe("8");
  });
});
