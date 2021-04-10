import React from "react";
import DepartmentForm from "./DepartmentForm";
import { shallow, mount } from "enzyme";
import { useAuth0 } from "@auth0/auth0-react";

const user = {
  email: "johndoe@me.com",
  email_verified: true,
  sub: "google-oauth2|2147627834623744883746",
};

jest.mock("@auth0/auth0-react");

describe("DepartmentForm, creating a new record", () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      user,
      logout: jest.fn(),
      loginWithRedirect: jest.fn(),
      getAccessTokenSilently: jest.fn(),
    });
  });
  it("Renders", () => {
    const wrapper = shallow(<DepartmentForm data={[]} rowId={"new"} />);
    expect(wrapper.find(".form_department")).toHaveLength(1);
  });
  it("Renders save button", () => {
    const wrapper = mount(<DepartmentForm data={[]} rowId={"new"} />);
    expect(wrapper.find("#button-save")).toHaveLength(1);
  });
  it("Does not render delete button if rowId is 'new'", () => {
    const wrapper = mount(<DepartmentForm data={[]} rowId={"new"} />);
    expect(wrapper.find("#button-delete")).toHaveLength(0);
  });
  it("Renders the user's input in the department field", () => {
    const wrapper = mount(<DepartmentForm data={[]} rowId={"new"} />);
    const firstEvent = {
      target: { name: "department_name", value: "kitchen" },
    };
    wrapper.find("#department").simulate("change", firstEvent);
    expect(wrapper.find("#department").props().value).toBe("kitchen");
  });
});

describe("DepartmentForm, error handling", () => {
  it("Renders error if user enters a value, then enters an empty value", () => {
    const wrapper = mount(<DepartmentForm data={[]} rowId={"new"} />);
    const firstEvent = {
      target: { name: "department_name", value: "kitchen" },
    };
    const secondEvent = { target: { name: "department_name", value: "" } };
    wrapper.find("#department").simulate("change", firstEvent);
    wrapper.find("#department").simulate("change", secondEvent);
    expect(wrapper.find(".form-error").text()).toBe(
      "Department name cannot be blank."
    );
  });
  it("Renders error if user clicks save and department field is blank", () => {
    const wrapper = mount(<DepartmentForm data={[]} rowId={"new"} />);
    wrapper.find("#button-save").simulate("click");
    expect(wrapper.find(".form-error").text()).toBe(
      "Department name cannot be blank."
    );
  });
});

describe("DepartmentForm, editing a saved record", () => {
  it("Renders department name", () => {
    const wrapper = mount(
      <DepartmentForm data={[{ department_name: "kitchen" }]} rowId={1} />
    );
    expect(wrapper.find("#department").props().value).toBe("kitchen");
  });
  it("Renders delete button if rowId is a number", () => {
    const wrapper = mount(
      <DepartmentForm data={[{ department_name: "kitchen" }]} rowId={1} />
    );
    expect(wrapper.find("#button-delete")).toHaveLength(1);
  });
});
