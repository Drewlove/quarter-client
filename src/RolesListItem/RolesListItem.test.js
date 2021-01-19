import React from "react";
import { shallow } from "enzyme";
import RolesListItem from "./RolesListItem";

describe("RolesListItem", () => {
  const dummyData = [
    { role_name: "chef", role_id: 1, department_id: 1 },
    { role_name: "sous chef", role_id: 2, department_id: 1 },
  ];

  it("Renders", () => {
    const wrapper = shallow(<RolesListItem roles={dummyData} />);
    expect(wrapper.find(".roles-list-item")).toHaveLength(1);
  });
  it("Renders two roles if two roles are provided as props", () => {
    const wrapper = shallow(<RolesListItem roles={dummyData} />);
    expect(wrapper.find(".fieldset__item-text")).toHaveLength(2);
  });
  it("Displays the names of the two roles", () => {
    const wrapper = shallow(<RolesListItem roles={dummyData} />);
    expect(wrapper.find(".fieldset__item-text").at(0).text()).toBe("chef");
    expect(wrapper.find(".fieldset__item-text").at(1).text()).toBe("sous chef");
  });
  it("Displays the department name", () => {
    const wrapper = shallow(
      <RolesListItem roles={dummyData} department="kitchen" />
    );
    expect(wrapper.find(".roles-list-item__department").text()).toBe("kitchen");
  });
});
