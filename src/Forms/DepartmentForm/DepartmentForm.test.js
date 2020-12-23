import React from "react";
import DepartmentForm from "./DepartmentForm";
import { shallow, mount } from "enzyme";

describe("DepartmentForm", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<DepartmentForm />);
  });
  it("renders", () => {
    expect(wrapper.find(".form_department")).toHaveLength(1);
  });
  it("renders error on blur if the field is blank", () => {
    wrapper.find("#department").simulate("blur");
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("renders error if field is empty after user manipulates field", () => {
    const event = { target: { name: "department", value: "" } };
    wrapper.find("#department").simulate("change", event);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("does NOT render error if field has a value of at least one character", () => {
    const event = { target: { name: "department", value: "a" } };
    wrapper.find("#department").simulate("change", event);
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
});
