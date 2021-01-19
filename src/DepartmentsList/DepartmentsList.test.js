import React from "react";
import { shallow, mount } from "enzyme";
import DepartmentsList from "./DepartmentsList";
import { MemoryRouter } from "react-router-dom";

describe("DepartmentsList", () => {
  const dummyData = [
    { department_name: "kitchen", department_id: 1 },
    { department_name: "front of house", department_id: 2 },
  ];

  const dummyDataEmpty = [];

  it("renders", () => {
    const wrapper = mount(
      <MemoryRouter>
        <DepartmentsList data={[dummyData]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".fieldset_departments")).toHaveLength(1);
  });
  it("renders two items if two departments are listed in the data", () => {
    const wrapper = mount(
      <MemoryRouter>
        <DepartmentsList data={[dummyData]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".fieldset__item-text")).toHaveLength(2);
  });
  it("renders EmptyList if zero departments are listed in the data", () => {
    const wrapper = mount(
      <MemoryRouter>
        <DepartmentsList data={[dummyDataEmpty]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".empty-list")).toHaveLength(1);
  });
});
