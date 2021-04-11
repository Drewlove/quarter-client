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

describe("ProfitLoss, Direct Labor", () => {
  it("renders category name", () => {
    const wrapper = mount(
      <MemoryRouter>
        <ProfitLoss data={[lineItems, shifts]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".fieldset__header").at(3).text()).toBe("Direct Labor");
  });
  it("renders first line item amount and text", () => {
    const wrapper = mount(
      <MemoryRouter>
        <ProfitLoss data={[lineItems, shifts]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".fieldset__item-text").at(9).text()).toBe("kitchen");
    expect(wrapper.find(".fieldset__amount").at(135).text()).toBe("$");
    expect(wrapper.find(".fieldset__amount").at(136).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(137).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(138).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(139).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(140).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(141).text()).toBe("1");
    expect(wrapper.find(".fieldset__amount").at(142).text()).toBe("3");
    expect(wrapper.find(".fieldset__amount").at(143).text()).toBe(",");
    expect(wrapper.find(".fieldset__amount").at(144).text()).toBe("9");
    expect(wrapper.find(".fieldset__amount").at(145).text()).toBe("9");
    expect(wrapper.find(".fieldset__amount").at(146).text()).toBe("4");
    expect(wrapper.find(".fieldset__amount").at(147).text()).toBe(".");
    expect(wrapper.find(".fieldset__amount").at(148).text()).toBe("5");
    expect(wrapper.find(".fieldset__amount").at(149).text()).toBe("0");
  });
  it("renders second line item amount and text", () => {
    const wrapper = mount(
      <MemoryRouter>
        <ProfitLoss data={[lineItems, shifts]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".fieldset__item-text").at(10).text()).toBe("service");
    expect(wrapper.find(".fieldset__amount").at(150).text()).toBe("$");
    expect(wrapper.find(".fieldset__amount").at(151).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(152).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(153).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(154).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(155).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(156).text()).toBe("2");
    expect(wrapper.find(".fieldset__amount").at(157).text()).toBe("5");
    expect(wrapper.find(".fieldset__amount").at(158).text()).toBe(",");
    expect(wrapper.find(".fieldset__amount").at(159).text()).toBe("1");
    expect(wrapper.find(".fieldset__amount").at(160).text()).toBe("9");
    expect(wrapper.find(".fieldset__amount").at(161).text()).toBe("0");
    expect(wrapper.find(".fieldset__amount").at(162).text()).toBe(".");
    expect(wrapper.find(".fieldset__amount").at(163).text()).toBe("1");
    expect(wrapper.find(".fieldset__amount").at(164).text()).toBe("0");
  });
  it("renders total direct labor in dollars, with label", () => {
    const wrapper = mount(
      <MemoryRouter>
        <ProfitLoss data={[lineItems, shifts]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".fieldset__item-text").at(11).text()).toBe(
      "Direct Labor"
    );
    expect(wrapper.find(".fieldset__amount").at(165).text()).toBe("$");
    expect(wrapper.find(".fieldset__amount").at(166).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(167).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(168).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(169).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(170).text()).toBe("");
    expect(wrapper.find(".fieldset__amount").at(171).text()).toBe("3");
    expect(wrapper.find(".fieldset__amount").at(172).text()).toBe("9");
    expect(wrapper.find(".fieldset__amount").at(173).text()).toBe(",");
    expect(wrapper.find(".fieldset__amount").at(174).text()).toBe("1");
    expect(wrapper.find(".fieldset__amount").at(175).text()).toBe("8");
    expect(wrapper.find(".fieldset__amount").at(176).text()).toBe("4");
    expect(wrapper.find(".fieldset__amount").at(177).text()).toBe(".");
    expect(wrapper.find(".fieldset__amount").at(178).text()).toBe("6");
    expect(wrapper.find(".fieldset__amount").at(179).text()).toBe("0");
  });
  // it("renders total direct labor as a percentage of sales, with label", () => {
  //   const wrapper = mount(
  //     <MemoryRouter>
  //       <ProfitLoss data={[lineItems, shifts]} />
  //     </MemoryRouter>
  //   );
  //   expect(wrapper.find(".fieldset__item-text").at(12).text()).toBe(
  //     "Direct Labor"
  //   );
  //   expect(wrapper.find(".fieldset__amount").at(180).text()).toBe("%");
  //   expect(wrapper.find(".fieldset__amount").at(181).text()).toBe("");
  //   expect(wrapper.find(".fieldset__amount").at(182).text()).toBe("");
  //   expect(wrapper.find(".fieldset__amount").at(183).text()).toBe("");
  //   expect(wrapper.find(".fieldset__amount").at(184).text()).toBe("");
  //   expect(wrapper.find(".fieldset__amount").at(185).text()).toBe("");
  //   expect(wrapper.find(".fieldset__amount").at(186).text()).toBe("");
  //   expect(wrapper.find(".fieldset__amount").at(187).text()).toBe("");
  //   expect(wrapper.find(".fieldset__amount").at(188).text()).toBe("");
  //   expect(wrapper.find(".fieldset__amount").at(189).text()).toBe("");
  //   expect(wrapper.find(".fieldset__amount").at(190).text()).toBe("2");
  //   expect(wrapper.find(".fieldset__amount").at(191).text()).toBe("0");
  //   expect(wrapper.find(".fieldset__amount").at(192).text()).toBe(".");
  //   expect(wrapper.find(".fieldset__amount").at(193).text()).toBe("4");
  //   expect(wrapper.find(".fieldset__amount").at(194).text()).toBe("1");
  // });
});
