import React from "react";
import DepartmentForm from "./DepartmentForm";
import { shallow, mount } from "enzyme";

describe("DepartmentForm", () => {
  it("Renders", () => {
    const wrapper = shallow(
      <DepartmentForm
        data={{ department_name: "kitchen" }}
        formError={{ department_name: "" }}
      />
    );
    expect(wrapper.find(".form_department")).toHaveLength(1);
  });
  it("Renders department name", () => {
    const wrapper = shallow(
      <DepartmentForm
        data={{ department_name: "kitchen" }}
        formError={{ department_name: "" }}
      />
    );
    expect(wrapper.find("#department").props().value).toBe("kitchen");
  });
  it("Renders error if formError is true", () => {
    const wrapper = mount(
      <DepartmentForm
        data={{ department_name: "kitchen" }}
        formError={{ department_name: "Enter a department" }}
      />
    );
    expect(wrapper.find(".form-error").text()).toBe("Enter a department");
  });
  it("Renders delete button if id is a number", () => {
    const wrapper = mount(
      <DepartmentForm
        data={{ department_name: "kitchen" }}
        formError={{ department_name: "" }}
        id="1"
      />
    );
    expect(wrapper.find("#button-delete")).toHaveLength(1);
  });
  it("Does not render delete button if id is 'new'", () => {
    const wrapper = mount(
      <DepartmentForm
        data={{ department_name: "kitchen" }}
        formError={{ department_name: "" }}
        id="new"
      />
    );
    expect(wrapper.find("#button-delete")).toHaveLength(0);
  });
});
