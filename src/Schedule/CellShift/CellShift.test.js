import React from "react";
import CellShift from "./CellShift";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

const shift = {
  department: "bake off",
  role_name: "kettle",
  shift_start: 4,
  shift_end: 8,
  people: 1,
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
    expect(wrapper.find(".schedule-text_shift-role").text()).toEqual("Kettle");
  });
  it("renders text: number of people", () => {
    expect(wrapper.find(".schedule-text_shift-people").text()).toEqual("1X");
  });
  it("renders text: shift hours", () => {
    expect(wrapper.find(".schedule-text_shift-hours").text()).toEqual(
      "4:00am-8:00am"
    );
  });
});
