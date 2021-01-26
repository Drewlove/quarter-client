import React from "react";
import Schedule from "./Schedule";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

const dummyData = [
  {
    shift_id: 1,
    shift_day: [0, 1, 2, 3, 4],
    shift_department: 1,
    shift_role: 4,
    shift_start: "7.00",
    shift_end: "15.00",
    people: 1,
    wage: "27.50",
    department_name: "kitchen",
    role_name: "head chef",
  },
  {
    shift_id: 2,
    shift_day: [3, 4, 5, 6],
    shift_department: 2,
    shift_role: 5,
    shift_start: "6.50",
    shift_end: "14.00",
    people: 2,
    wage: "13.50",
    department_name: "service",
    role_name: "line prep",
  },
  {
    shift_id: 3,
    shift_day: [0, 1, 2, 3, 4],
    shift_department: 1,
    shift_role: 4,
    shift_start: "7.00",
    shift_end: "15.00",
    people: 1,
    wage: "15.00",
    department_name: "kitchen",
    role_name: "sous chef",
  },
];

const dummyDataEmpty = [];

describe("Schedule", () => {
  it("Renders", () => {
    const wrapper = shallow(<Schedule data={[dummyData]} />);
    expect(wrapper.find(".schedule-row_weekdays")).toHaveLength(1);
  });
  it("Renders EmptyList if data is empty", () => {
    const wrapper = mount(
      <MemoryRouter>
        <Schedule data={[dummyDataEmpty]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".empty-list")).toHaveLength(1);
  });
  it("Renders two total department rows when data holds a maximum of two unique departments", () => {
    const wrapper = mount(
      <MemoryRouter>
        <Schedule data={[dummyData]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".schedule-row_department")).toHaveLength(2);
  });
  it("Renders department names and total payroll costs for each department", () => {
    const wrapper = mount(
      <MemoryRouter>
        <Schedule data={[dummyData]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".schedule-text_department").at(0).text()).toBe(
      "Kitchen - $1700.00"
    );
    expect(wrapper.find(".schedule-text_department").at(1).text()).toBe(
      "Service - $810.00"
    );
  });
  it("Renders the correct number of rows for each department", () => {
    const wrapper = mount(
      <MemoryRouter>
        <Schedule data={[dummyData]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".schedule-row_role-container")).toHaveLength(3);
  });
});
