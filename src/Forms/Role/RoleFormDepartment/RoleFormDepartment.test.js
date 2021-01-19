import React from "react";
import { shallow, mount } from "enzyme";
import RoleFormDepartment from "./RoleFormDepartment";

const departments = [
  { department_name: "kitchen", department_id: 1 },
  { department_name: "service", department_id: 2 },
];

describe("RoleFormDepartment", () => {
  it("Renders", () => {
    const wrapper = mount(
      <RoleFormDepartment
        formError=""
        handleChange={() => null}
        value="1"
        departments={departments}
      />
    );
    expect(wrapper.find(".input-section_role-department")).toHaveLength(1);
  });
  it("Renders the selected department name", () => {
    const wrapper = mount(
      <RoleFormDepartment
        formError=""
        handleChange={() => null}
        value="1"
        departments={departments}
      />
    );
    expect(wrapper.find(".input-section__input").props().value).toBe("1");
  });
  it("Renders the department names as options", () => {
    const wrapper = mount(
      <RoleFormDepartment
        formError=""
        handleChange={() => null}
        value="1"
        departments={departments}
      />
    );
    expect(wrapper.find(".input-section__option").at(0).text()).toBe("kitchen");
    expect(wrapper.find(".input-section__option").at(1).text()).toBe("service");
  });
  it("If error, error component renders", () => {
    const wrapper = mount(
      <RoleFormDepartment
        formError="Select a department."
        handleChange={() => null}
        departments={departments}
      />
    );
    expect(wrapper.find(".form-error")).toHaveLength(1);
    expect(wrapper.find(".form-error").text()).toBe("Select a department.");
  });
  it("If no error, no error component renders", () => {
    const wrapper = mount(
      <RoleFormDepartment
        formError=""
        handleChange={() => null}
        departments={departments}
      />
    );
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
});
