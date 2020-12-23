import React from "react";
import { shallow, mount } from "enzyme";
import RoleFormDepartment from "./RoleFormDepartment";

describe("RoleFormDepartment", () => {
  it("renders", () => {
    const wrapper = mount(<RoleFormDepartment />);
    expect(wrapper.find(".input-section_role-department")).toHaveLength(1);
  });
  it("If error, error component renders", () => {
    const wrapper = mount(<RoleFormDepartment error={true} />);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("If no error, no error component renders", () => {
    const wrapper = mount(<RoleFormDepartment error={false} />);
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
});
