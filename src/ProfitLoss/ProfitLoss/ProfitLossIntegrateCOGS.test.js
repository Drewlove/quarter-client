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

describe("ProfitLoss, COGS", () => {
  it("renders category name", () => {
    const wrapper = mount(
      <MemoryRouter>
        <ProfitLoss data={[lineItems, shifts]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".fieldset__header").at(1).text()).toBe("COGS");
  });
  it("renders first amount and name of line item", () => {
    const wrapper = mount(
      <MemoryRouter>
        <ProfitLoss data={[lineItems, shifts]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".fieldset__item-text").at(3).text()).toBe("Food");
    expect(wrapper.find(".fieldset__amount").at(45).text()).toBe("$");
    expect(wrapper.find(".fieldset__amount").at(46).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(47).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(48).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(49).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(50).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(51).text()).toBe("5");
    expect(wrapper.find(".fieldset__amount").at(52).text()).toBe("4");
    expect(wrapper.find(".fieldset__amount").at(53).text()).toBe(",");
    expect(wrapper.find(".fieldset__amount").at(54).text()).toBe("6");
    expect(wrapper.find(".fieldset__amount").at(55).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(56).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(57).text()).toBe(".");
    expect(wrapper.find(".fieldset__amount").at(58).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(59).text()).toBe("0");
  });
  it("renders second amount and name of line item", () => {
    const wrapper = mount(
      <MemoryRouter>
        <ProfitLoss data={[lineItems, shifts]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".fieldset__item-text").at(4).text()).toBe("Beverage");
    expect(wrapper.find(".fieldset__amount").at(60).text()).toBe("$");
    expect(wrapper.find(".fieldset__amount").at(61).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(62).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(63).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(64).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(65).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(66).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(67).text()).toBe("1");
    expect(wrapper.find(".fieldset__amount").at(68).text()).toBe(",");
    expect(wrapper.find(".fieldset__amount").at(69).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(70).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(71).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(72).text()).toBe(".");
    expect(wrapper.find(".fieldset__amount").at(73).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(74).text()).toBe("0");
  });
  it("renders total amount in dollars and name of total", () => {
    const wrapper = mount(
      <MemoryRouter>
        <ProfitLoss data={[lineItems, shifts]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".fieldset__item-text").at(5).text()).toBe("COGS");
    expect(wrapper.find(".fieldset__amount").at(75).text()).toBe("$");
    expect(wrapper.find(".fieldset__amount").at(76).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(77).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(78).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(79).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(80).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(81).text()).toBe("5");
    expect(wrapper.find(".fieldset__amount").at(82).text()).toBe("5");
    expect(wrapper.find(".fieldset__amount").at(83).text()).toBe(",");
    expect(wrapper.find(".fieldset__amount").at(84).text()).toBe("6");
    expect(wrapper.find(".fieldset__amount").at(85).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(86).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(87).text()).toBe(".");
    expect(wrapper.find(".fieldset__amount").at(88).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(89).text()).toBe("0");
  });
  it("renders total amount as a percentage of sales and name of total", () => {
    const wrapper = mount(
      <MemoryRouter>
        <ProfitLoss data={[lineItems, shifts]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".fieldset__item-text").at(6).text()).toBe("COGS");
    expect(wrapper.find(".fieldset__amount").at(90).text()).toBe("%");
    expect(wrapper.find(".fieldset__amount").at(91).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(92).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(93).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(94).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(95).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(96).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(97).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(98).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(99).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(100).text()).toBe("2");
    expect(wrapper.find(".fieldset__amount").at(101).text()).toBe("8");
    expect(wrapper.find(".fieldset__amount").at(102).text()).toBe(".");
    expect(wrapper.find(".fieldset__amount").at(103).text()).toBe("9");
    expect(wrapper.find(".fieldset__amount").at(104).text()).toBe("6");
  });
});
