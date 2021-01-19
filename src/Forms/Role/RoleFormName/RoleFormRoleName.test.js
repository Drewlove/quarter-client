import React from "react";
import { shallow, mount } from "enzyme";
import RoleFormRoleName from "./RoleFormRoleName";

describe("RoleFormRoleName", () => {
  it("renders", () => {
    const wrapper = shallow(
      <RoleFormRoleName value="chef" formError="" handleChange={() => null} />
    );
    expect(wrapper.find(".input-section_role-name")).toHaveLength(1);
  });
  it("renders value", () => {
    const wrapper = mount(
      <RoleFormRoleName value="chef" formError="" handleChange={() => null} />
    );
    expect(wrapper.find("#role").props().value).toBe("chef");
  });
  it("If error, error component renders", () => {
    const wrapper = mount(
      <RoleFormRoleName formError="Enter a role." handleChange={() => null} />
    );
    expect(wrapper.find(".form-error")).toHaveLength(1);
    expect(wrapper.find(".form-error").text()).toBe("Enter a role.");
  });
  it("If no error, no error component renders", () => {
    const wrapper = mount(
      <RoleFormRoleName formError="" handleChange={() => null} />
    );
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
});
