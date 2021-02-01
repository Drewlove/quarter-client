import React from "react";
import ShiftFormDepartment from "./ShiftFormDepartment";
import { mount } from "enzyme";

const departments = [
  {
    department_id: 1,
    department_name: "service",
  },
  {
    department_id: 2,
    department_name: "kitchen",
  },
  {
    department_id: 3,
    department_name: "doughs",
  },
];

describe("ShiftFormDepartment", () => {
  it("Renders", () => {
    const wrapper = mount(
      <ShiftFormDepartment
        handleChange={() => null}
        formError=""
        departments={departments}
      />
    );
    expect(wrapper.find(".input-section_department")).toHaveLength(1);
  });
  it("Renders value", () => {
    const wrapper = mount(
      <ShiftFormDepartment
        handleChange={() => null}
        formError="Error message"
        value="1"
        departments={departments}
      />
    );
    expect(wrapper.find(".input-section__input_department").props().value).toBe(
      "1"
    );
    expect(wrapper.find(".input-section__input_department").props().value).toBe(
      "1"
    );
  });
  it("Renders error message if there is an error", () => {
    const wrapper = mount(
      <ShiftFormDepartment
        handleChange={() => null}
        formError="Error message"
        departments={departments}
      />
    );
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("Renders NO error message if there is NO error", () => {
    const wrapper = mount(
      <ShiftFormDepartment
        handleChange={() => null}
        formError=""
        departments={departments}
      />
    );
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
});
