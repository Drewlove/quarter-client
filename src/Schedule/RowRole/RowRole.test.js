import React from "react";
import { mount, shallow } from "enzyme";
import RowRole from "./RowRole";
import { MemoryRouter } from "react-router-dom";

const dummyShift = {
  department_name: "kitchen",
  people: 1,
  role_name: "sous chef",
  shift_day: [4, 5, 6],
  shift_department: 1,
  shift_end: "16:30",
  shift_id: 13,
  shift_role: 3,
  shift_start: "9:00",
  wage: "15.00",
};

const dummyRow = [
  { isShift: false, id: "13-0" },
  { isShift: false, id: "13-1" },
  { isShift: false, id: "13-2" },
  { isShift: false, id: "13-3" },
  { isShift: true, id: "13-4", shift: dummyShift },
  { isShift: true, id: "13-5", shift: dummyShift },
  { isShift: true, id: "13-6", shift: dummyShift },
];

const row = describe("RowRole", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter>
        <RowRole row={dummyRow} />
      </MemoryRouter>
    );
  });
  it("renders", () => {
    expect(wrapper.find(".schedule-row_role-container")).toHaveLength(1);
  });
  it("renders correct number of blank cells", () => {
    expect(wrapper.find(".schedule-row__cell_blank")).toHaveLength(4);
  });
  it("renders correct number of cells with shift info", () => {
    expect(wrapper.find(".schedule-row__cell_shift")).toHaveLength(3);
  });
  it("renders text: role name", () => {
    expect(wrapper.find(".schedule-text_shift-role").at(0).text()).toEqual(
      "sous chef"
    );
  });
  it("renders text: number of people", () => {
    expect(wrapper.find(".schedule-text_shift-people").at(0).text()).toEqual(
      "1 person"
    );
  });
  it("renders text: shift hours", () => {
    expect(wrapper.find(".schedule-text_shift-hours").at(0).text()).toEqual(
      "9:00am-4:30pm"
    );
  });
});
