import React from "React";
import Department from "./Department";
import { mount } from "enzyme";
import { COLLATE_SCHEDULE } from "../../Utilities/COLLATE_SCHEDULE";
import { MemoryRouter } from "react-router-dom";

const dummyData = [
  {
    shift_id: 1,
    shift_day: [0, 1, 2, 3, 4],
    shift_department: 1,
    shift_role: 4,
    shift_start: "07:00",
    shift_end: "15:00",
    people: 1,
    wage: "27.50",
    payroll_tax: "7.65",
    department_name: "kitchen",
    role_name: "head chef",
  },
  {
    shift_id: 3,
    shift_day: [0, 1, 2, 3, 4],
    shift_department: 1,
    shift_role: 4,
    shift_start: "10:00",
    shift_end: "17:30",
    people: 1,
    wage: "15.00",
    payroll_tax: "7.65",
    department_name: "kitchen",
    role_name: "sous chef",
  },
];

let dummySchedule = COLLATE_SCHEDULE(dummyData);

describe("Department", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter>
        <Department
          row={dummySchedule.kitchen.row}
          cost={dummySchedule.kitchen.cost}
          deptName={"kitchen"}
          multiplier={"quarter"}
        />
      </MemoryRouter>
    );
  });

  it("Renders", () => {
    expect(wrapper.find(".schedule-row_department")).toHaveLength(1);
  });
  it("Renders the department name and total payroll costs", () => {
    expect(wrapper.find(".schedule-text_department").at(0).text()).toBe(
      "kitchen - $1,789.68"
    );
  });
  it("Renders two rows when given two roles", () => {
    expect(wrapper.find("a.schedule-row_role")).toHaveLength(2);
  });

  it("renders correct number of blank cells", () => {
    expect(wrapper.find(".schedule-row__cell_blank")).toHaveLength(4);
  });
  it("renders correct number of cells with shift info", () => {
    expect(wrapper.find(".schedule-row__cell_shift")).toHaveLength(10);
  });
  it("renders text for first role: role name", () => {
    expect(wrapper.find(".schedule-text_shift-role").at(0).text()).toEqual(
      "head chef"
    );
  });
  it("renders text for first role: number of people", () => {
    expect(wrapper.find(".schedule-text_shift-people").at(0).text()).toEqual(
      "1 person"
    );
  });
  it("renders text for first role: shift hours", () => {
    expect(wrapper.find(".schedule-text_shift-hours").at(0).text()).toEqual(
      "7:00am-3:00pm"
    );
  });

  it("renders text for second role: role name", () => {
    expect(wrapper.find(".schedule-text_shift-role").at(5).text()).toEqual(
      "sous chef"
    );
  });
  it("renders text for second role: number of people", () => {
    expect(wrapper.find(".schedule-text_shift-people").at(5).text()).toEqual(
      "1 person"
    );
  });
  it("renders text for second role: shift hours", () => {
    expect(wrapper.find(".schedule-text_shift-hours").at(5).text()).toEqual(
      "10:00am-5:30pm"
    );
  });
});
