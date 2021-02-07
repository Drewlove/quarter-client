import React from "react";
import CellShift from "./CellShift";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

const shift = {
  department_name: "bagel production",
  people: 3,
  role_name: "production",
  shift_day: [1, 3, 5],
  shift_department: 3,
  shift_id: 3,
  shift_role: 1,
  shift_start: "15:00:00",
  shift_end: "18:00:00",
  wage: "13.50",
};
describe("CellShift", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter>
        <CellShift shift={shift} />
      </MemoryRouter>
    );
  });
  it("renders a cell", () => {
    expect(wrapper.find(".schedule-row__cell_shift")).toHaveLength(1);
  });
  it("renders text: role name", () => {
    expect(wrapper.find(".schedule-text_shift-role").text()).toEqual(
      "production"
    );
  });
  it("renders text: number of people", () => {
    expect(wrapper.find(".schedule-text_shift-people").text()).toEqual("3X");
  });
  it("renders text: shift hours", () => {
    expect(wrapper.find(".schedule-text_shift-hours").text()).toEqual(
      "3:00pm-6:00pm"
    );
  });
});
