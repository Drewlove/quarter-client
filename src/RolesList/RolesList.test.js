import React from "react";
import { shallow, mount } from "enzyme";
import RolesList from "./RolesList";
import { MemoryRouter } from "react-router-dom";

describe("RolesList", () => {
  const dummyData = [
    {
      role_name: "chef",
      role_id: 1,
      department_id: 1,
      department_name: "kitchen",
    },
    {
      role_name: "doughs",
      role_id: 5,
      department_id: 3,
      department_name: "production",
    },
    {
      role_name: "expediter",
      role_id: 3,
      department_id: 2,
      department_name: "service",
    },
    {
      role_name: "register",
      role_id: 4,
      department_id: 2,
      department_name: "service",
    },
    {
      role_name: "shaping",
      role_id: 6,
      department_id: 3,
      department_name: "production",
    },
    {
      role_name: "sous chef",
      role_id: 2,
      department_id: 1,
      department_name: "kitchen",
    },
  ];

  it("Renders", () => {
    const wrapper = shallow(<RolesList data={[dummyData]} />);
    expect(wrapper.find(".fieldset")).toHaveLength(1);
  });
  it("Renders three departments if three unique departments are provided as data", () => {
    const wrapper = mount(
      <MemoryRouter>
        <RolesList data={[dummyData]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".roles-list-item__department")).toHaveLength(3);
  });
  it("Displays three department names alphabetically if there are three unique departments provided as data", () => {
    const wrapper = mount(
      <MemoryRouter>
        <RolesList data={[dummyData]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".roles-list-item__department").at(0).text()).toBe(
      "kitchen"
    );
    expect(wrapper.find(".roles-list-item__department").at(1).text()).toBe(
      "production"
    );
    expect(wrapper.find(".roles-list-item__department").at(2).text()).toBe(
      "service"
    );
  });
  it("Organizes roles by department, and displays roles under each department heading, department: 'kitchen'", () => {
    const wrapper = mount(
      <MemoryRouter>
        <RolesList data={[dummyData]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".roles-list-item__department").at(0).text()).toBe(
      "kitchen"
    );
    expect(wrapper.find(".fieldset__item-text").at(0).text()).toBe("chef");
    expect(wrapper.find(".fieldset__item-text").at(1).text()).toBe("sous chef");
  });
  it("Organizes roles by department, and displays roles under each department heading, department: 'production'", () => {
    const wrapper = mount(
      <MemoryRouter>
        <RolesList data={[dummyData]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".roles-list-item__department").at(1).text()).toBe(
      "production"
    );
    expect(wrapper.find(".fieldset__item-text").at(2).text()).toBe("doughs");
    expect(wrapper.find(".fieldset__item-text").at(3).text()).toBe("shaping");
  });
  it("Organizes roles by department, and displays roles under each department heading, department: 'service'", () => {
    const wrapper = mount(
      <MemoryRouter>
        <RolesList data={[dummyData]} />
      </MemoryRouter>
    );
    expect(wrapper.find(".roles-list-item__department").at(2).text()).toBe(
      "service"
    );
    expect(wrapper.find(".fieldset__item-text").at(4).text()).toBe("expediter");
    expect(wrapper.find(".fieldset__item-text").at(5).text()).toBe("register");
  });
});
