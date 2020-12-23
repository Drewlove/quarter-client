import React from "react";
import RoleForm from "./RoleForm";
import { shallow, mount } from "enzyme";

describe("RoleForm", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<RoleForm />);
  });
  it("renders", () => {
    expect(wrapper.find(".form_role")).toHaveLength(1);
  });
  it("if save button is clicked and both fields are empty, renders two error messages ", () => {
    wrapper.find("#button-save").simulate("click");
    expect(wrapper.find(".form-error")).toHaveLength(2);
  });
  it("if save button is clicked, and user then selects a department, renders 1 error message ", () => {
    wrapper.find("#button-save").simulate("click");
    wrapper
      .find("#department")
      .simulate("change", { target: { name: "department", value: "kitchen" } });
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("if save button is clicked, and user then selects a department and enters a value into the role field, renders 0 error message ", () => {
    wrapper.find("#button-save").simulate("click");
    wrapper
      .find("#department")
      .simulate("change", { target: { name: "department", value: "kitchen" } });
    wrapper
      .find("#role")
      .simulate("change", { target: { name: "role", value: "sous chef" } });
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
  it("if the role field is blank, and user moves focus away from role field, renders error", () => {
    wrapper.find("#role").simulate("blur");
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("if role field is empty after user changes field, renders error ", () => {
    const event = { target: { name: "role", value: "" } };
    wrapper.find("#role").simulate("change", event);
    expect(wrapper.find(".form-error")).toHaveLength(1);
  });
  it("if role field has a value of at least one character, does NOT render error", () => {
    const event = { target: { name: "role", value: "a" } };
    wrapper.find("#role").simulate("change", event);
    expect(wrapper.find(".form-error")).toHaveLength(0);
  });
});
