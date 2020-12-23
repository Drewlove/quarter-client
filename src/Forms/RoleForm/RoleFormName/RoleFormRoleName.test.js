import React from "react";
import { shallow, mount } from "enzyme";
import RoleFormRoleName from "./RoleFormRoleName";

describe("RoleFormRoleName", () => {
  it("renders", () => {
    const wrapper = mount(<RoleFormRoleName />);
    expect(wrapper.find(".input-section_role-name")).toHaveLength(1);
  });
  it("If error, error component renders", () => {
    const wrapper = mount(<RoleFormRoleName error={true} />);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("If no error, no error component renders", () => {
    const wrapper = mount(<RoleFormRoleName error={false} />);
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
});
