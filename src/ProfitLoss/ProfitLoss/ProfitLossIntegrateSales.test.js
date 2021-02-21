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

describe("ProfitLoss, Sales", () => {
  it("renders category name", () => {
    const wrapper = mount(
      <MemoryRouter>
        <ProfitLoss data={[lineItems, shifts]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".fieldset__header").at(0).text()).toBe("Sales");
  });
  it("renders first amount and name of line item", () => {
    const wrapper = mount(
      <MemoryRouter>
        <ProfitLoss data={[lineItems, shifts]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".fieldset__item-text").at(0).text()).toBe("Beverage");
    expect(wrapper.find(".fieldset__amount").at(0).text()).toBe("$");
    expect(wrapper.find(".fieldset__amount").at(1).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(2).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(3).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(4).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(5).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(6).text()).toBe("1");
    expect(wrapper.find(".fieldset__amount").at(7).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(8).text()).toBe(",");
    expect(wrapper.find(".fieldset__amount").at(9).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(10).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(11).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(12).text()).toBe(".");
    expect(wrapper.find(".fieldset__amount").at(13).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(14).text()).toBe("0");
  });
  it("renders second amount and name of line item", () => {
    const wrapper = mount(
      <MemoryRouter>
        <ProfitLoss data={[lineItems, shifts]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".fieldset__item-text").at(1).text()).toBe("Food");
    expect(wrapper.find(".fieldset__amount").at(15).text()).toBe("$");
    expect(wrapper.find(".fieldset__amount").at(16).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(17).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(18).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(19).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(20).text()).toBe("1");
    expect(wrapper.find(".fieldset__amount").at(21).text()).toBe("8");
    expect(wrapper.find(".fieldset__amount").at(22).text()).toBe("2");
    expect(wrapper.find(".fieldset__amount").at(23).text()).toBe(",");
    expect(wrapper.find(".fieldset__amount").at(24).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(25).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(26).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(27).text()).toBe(".");
    expect(wrapper.find(".fieldset__amount").at(28).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(29).text()).toBe("0");
  });
  it("renders total amount and name of total", () => {
    const wrapper = mount(
      <MemoryRouter>
        <ProfitLoss data={[lineItems, shifts]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".fieldset__item-text").at(2).text()).toBe("Sales");
    expect(wrapper.find(".fieldset__amount").at(30).text()).toBe("$");
    expect(wrapper.find(".fieldset__amount").at(31).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(32).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(33).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(34).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(35).text()).toBe("1");
    expect(wrapper.find(".fieldset__amount").at(36).text()).toBe("9");
    expect(wrapper.find(".fieldset__amount").at(37).text()).toBe("2");
    expect(wrapper.find(".fieldset__amount").at(38).text()).toBe(",");
    expect(wrapper.find(".fieldset__amount").at(39).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(40).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(41).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(42).text()).toBe(".");
    expect(wrapper.find(".fieldset__amount").at(43).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(44).text()).toBe("0");
  });
});
