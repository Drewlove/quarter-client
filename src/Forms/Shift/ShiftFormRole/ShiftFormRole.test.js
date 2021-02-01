import React from "react";
import ShiftFormRole from "./ShiftFormRole";
import { mount } from "enzyme";

const roles = [
  {
    department_id: 1,
    department_name: "service",
    role_id: 1,
    role_name: "register",
  },
  {
    department_id: 1,
    department_name: "service",
    role_id: 2,
    role_name: "expediter",
  },
  {
    department_id: 1,
    department_name: "service",
    role_id: 3,
    role_name: "line",
  },
];

describe("ShiftFormRole", () => {
  it("Renders", () => {
    const wrapper = mount(
      <ShiftFormRole handleChange={() => null} formError="" roles={roles} />
    );
    expect(wrapper.find(".input-section_role")).toHaveLength(1);
  });
  it("Renders value", () => {
    const wrapper = mount(
      <ShiftFormRole
        handleChange={() => null}
        formError="Error message"
        value="1"
        roles={roles}
      />
    );
    expect(wrapper.find(".input-section__input_role").props().value).toBe("1");
  });
  it("Renders error message if there is an error", () => {
    const wrapper = mount(
      <ShiftFormRole
        handleChange={() => null}
        formError="Error message"
        roles={roles}
      />
    );
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("Renders NO error message if there is NO error", () => {
    const wrapper = mount(
      <ShiftFormRole handleChange={() => null} formError="" roles={roles} />
    );
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
});
